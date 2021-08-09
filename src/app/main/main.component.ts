import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './login/auth.service';
import { User } from './login/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  currentUser: User;
  onConfigChanged: Subscription;
  fuseSettings: any;
  isExpanded: boolean;
  isNav: boolean = true;
  /**
   * Constructor
   *
   * @param {AuthService} _authenticationService
   * @param {MatSnackBar} _snackBar
   */

  constructor(private authenticationService: AuthService) {
    this.authenticationService.user.subscribe((x) => (this.currentUser = x));
  }
}
