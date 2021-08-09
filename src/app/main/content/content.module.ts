import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/@shared/shared.module';
import { ContentComponent } from './content.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [RouterModule, SharedModule, PagesModule],
  exports: [ContentComponent],
})
export class ContentModule {}
