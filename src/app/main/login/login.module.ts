import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
