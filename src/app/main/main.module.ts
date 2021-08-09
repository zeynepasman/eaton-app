import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { ContentModule } from './content/content.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { SharedModule } from 'src/@shared/shared.module';
import { NavbarModule } from './navbar/navbar.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MainComponent],
  imports: [
    RouterModule,
    ContentModule,
    LoginModule,
    SharedModule,
    HttpClientModule,
    NavbarModule,
    MatSidenavModule,
    MatIconModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
