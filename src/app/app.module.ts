import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErreurComponent } from './erreur/erreur.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { DashboradComponent } from './admin/dashborad/dashborad.component';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErreurComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ClientModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
