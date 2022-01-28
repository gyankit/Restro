import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { VendorGuard } from './guard/vendor.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:next', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'register/:next', component: RegisterComponent },
  {
    path: '',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'vendor',
    canActivate: [VendorGuard],
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
