
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShowCodesComponent } from './show-codes.component';

const routes: Routes = [
  {
    path: '',
    component: ShowCodesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowCodesComponent]
})
export class ShowCodesModule { }
