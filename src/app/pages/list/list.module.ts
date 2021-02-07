import { NgModule } from '@angular/core';
import { ListPage } from './list.page';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [],
  declarations: [ListPage],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ]
})
export class ListModule { }
