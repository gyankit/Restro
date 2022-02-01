import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerGuard } from '../guard/customer.guard';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'login/:next', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register/:next', component: RegisterComponent },
      { path: 'order', component: OrderComponent, canActivate: [CustomerGuard] },
      { path: 'cart', component: CartComponent, canActivate: [CustomerGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [CustomerGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [CustomerGuard] },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
