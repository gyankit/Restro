import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { AdminComponent } from './admin.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AdminGuard],
    component: AdminComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'order', component: OrderComponent, },
      { path: 'menu', component: MenuComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'vendor', component: VendorComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
