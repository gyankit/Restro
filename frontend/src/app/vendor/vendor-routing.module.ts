import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorGuard } from '../guard/vendor.guard';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { VendorComponent } from './vendor.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [VendorGuard],
    component: VendorComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
