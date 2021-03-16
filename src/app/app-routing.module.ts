import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCodesComponent } from './components/add-codes/add-codes.component';
import { HomeComponent } from './pages/home/home.component';
import { ShowCodesComponent } from './pages/show-codes/show-codes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [     
      {
        path: 'add-codes',
        component: AddCodesComponent
      }
    ]
  },
  {
    path: 'show-codes',
    component: ShowCodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
