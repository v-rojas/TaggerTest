import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EndpointProvider } from './services/endpoint/endpoint';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './services/interceptor/interceptor';
import { HeaderComponent } from './shared/header/header.component';
import { HomeModule } from './pages/home/home.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAlertComponent } from './shared/modals/dialog-alert/dialog-alert.component';

@NgModule({
  entryComponents: [DialogAlertComponent],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    EndpointProvider,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
