import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AdminGuard } from './guard/admin.guard';
import { VendorGuard } from './guard/vendor.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
  },
  {
    path: 'vendor',
    canActivate: [VendorGuard],
    loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule),
  },
  {
    path: 'admin',
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
