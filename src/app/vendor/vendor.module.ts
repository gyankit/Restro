import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VendorComponent } from './vendor.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProfileModule } from './profile/profile.module';
import { MenuModule } from './menu/menu.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    VendorComponent,
    HomeComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    ProfileModule,
    FormsModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
