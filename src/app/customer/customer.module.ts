import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { ProfileModule } from './profile/profile.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerRoutingModule } from './customer-routing.module';


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
  ],
  imports: [
    CommonModule,
    ProfileModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
