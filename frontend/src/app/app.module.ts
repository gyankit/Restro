import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './api.interceptor';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerRegisterComponent } from './components/register/customer-register/customer-register.component';
import { VendorRegisterComponent } from './components/register/vendor-register/vendor-register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AdminRegisterComponent } from './components/register/admin-register/admin-register.component';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AdminRegisterComponent,
    CustomerRegisterComponent,
    VendorRegisterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
