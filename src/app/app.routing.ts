import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './main/content/pages/landing-page/chart.component';
import { ListPageComponent } from './main/content/pages/list-page/list-page.component';
import { LoginComponent } from './main/login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: 'list',
    component: ListPageComponent,
    canActivate: [AuthGuard],
    data: { navbar: true },
  },
  { path: '', component: LoginComponent, data: { navbar: false } },

  {
    path: 'chart',
    component: ChartComponent,
    data: { navbar: true },
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
