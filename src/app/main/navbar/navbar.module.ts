import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NavigationModule } from 'src/@shared/components/navigation/navigation.module';
import { SharedModule } from 'src/@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    NavigationModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
