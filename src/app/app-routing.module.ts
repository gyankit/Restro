import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './customer/cart/cart.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './customer/home/home.component';
import { OrderComponent } from './customer/order/order.component';
import { ProfileComponent } from './customer/profile/profile.component';

import { AdminGuard } from './guard/admin.guard';
import { CustomerGuard } from './guard/customer.guard';
import { VendorGuard } from './guard/vendor.guard';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'order', component: OrderComponent, canActivate: [CustomerGuard] },
      { path: 'cart', component: CartComponent, canActivate: [CustomerGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [CustomerGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [CustomerGuard] },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login/:next', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:next', component: RegisterComponent },
  {
    path: 'vendor',
    canActivate: [VendorGuard],
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
  },
  {
    path: 'supervisor',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
