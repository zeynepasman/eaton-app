import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { ListPageComponent } from './list-page/list-page.component';
import { SharedModule } from 'src/@shared/shared.module';
import { ListService } from './list-page/list.service';
import { ChartComponent } from './landing-page/chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ListPageComponent, ChartComponent],
  exports: [],

  imports: [
    CdkTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatButtonModule,
    SharedModule,
    ChartsModule,
  ],
  providers: [ListService],
})
export class PagesModule {}
