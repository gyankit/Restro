import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin.component';
import { MenuModule } from './menu/menu.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
    ProfileModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
