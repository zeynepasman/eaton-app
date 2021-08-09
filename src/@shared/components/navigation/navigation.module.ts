import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavItemComponent } from './nav-item/nav-item.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports: [NavigationComponent],
  declarations: [NavigationComponent, NavItemComponent],
})
export class NavigationModule {}
