import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  loading: boolean = false;
  /**
   * Constructor
   *
   * @param {FormBuilder} _formBuilder
   * @param {Router} _router
   * @param {AuthService} _authenticationService
   * @param {MatSnackBar} _snackBar
   */

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authenticationService: AuthService,
    private _snackBar: MatSnackBar
  ) {
    this.loginFormErrors = {
      username: {},
      password: {},
    };
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }
  get formControls() {
    return this.loginForm.controls;
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  userLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this._authenticationService
      .login(this.formControls.username.value, this.formControls.password.value)
      .subscribe(
        (data) => {
          this.loading = false;
          this._router.navigate(['/chart']);
        },
        (error) => {
          this.loading = false;
          this._snackBar.open(`${error}`, 'OK', {
            verticalPosition: 'bottom',
            duration: 10000,
          });
        }
      );
  }
}
