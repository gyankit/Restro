import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ProfileModule } from './profile/profile.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './register/register.component';
import { AdminRegisterComponent } from './register/admin-register/admin-register.component';
import { CustomerRegisterComponent } from './register/customer-register/customer-register.component';
import { VendorRegisterComponent } from './register/vendor-register/vendor-register.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    CustomerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CartComponent,
    OrderComponent,
    CheckoutComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    AdminRegisterComponent,
    CustomerRegisterComponent,
    VendorRegisterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
