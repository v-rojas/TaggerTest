import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { EndpointProvider } from 'src/app/services/endpoint/endpoint';
import { AddCodesComponent } from 'src/app/components/add-codes/add-codes.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShowCodesComponent } from '../show-codes/show-codes.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [    
    HomeComponent,
    AddCodesComponent,
    ShowCodesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,   
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule   
  ],
  providers: [
    EndpointProvider
  ]
})
export class HomeModule { }
