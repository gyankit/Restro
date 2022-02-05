import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin.component';
import { ProfileModule } from './profile/profile.module';
import { CustomerComponent } from './customer/customer.component';
import { VendorComponent } from './vendor/vendor.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    AdminComponent,
    CustomerComponent,
    VendorComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ProfileModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
