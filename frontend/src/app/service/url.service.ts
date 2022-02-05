import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  base: string = 'http://localhost:8000/web/';

  url = [
    { key: 'login', value: this.base + 'login' },
    { key: 'upload', value: this.base + 'upload' },
    { key: 'country', value: this.base + 'country' },
    { key: 'register', value: this.base + 'register' },
    //menu
    { key: 'menu', value: this.base + 'menu' },
    { key: 'menu-state', value: this.base + 'menu/state' },
    { key: 'menu-create', value: this.base + 'menu/create' },
    { key: 'menu-update', value: this.base + 'menu/update' },
    { key: 'menu-delete', value: this.base + 'menu/delete' },
    //order
    { key: 'order', value: this.base + 'order' },
    { key: 'order-create', value: this.base + 'order/create' },
    { key: 'order-update', value: this.base + 'order/update' },
    { key: 'order-delete', value: this.base + 'order/delete' },
    //vendor
    { key: 'vendor-order', value: this.base + 'order' },
    { key: 'vendor-profile', value: this.base + 'vendor' },
    { key: 'vendor-order-state', value: this.base + 'order/state' },
    { key: 'vendor-profile-state', value: this.base + 'vendor/state' },
    { key: 'vendor-profile-update', value: this.base + 'vendor/update' },
    //customer
    { key: 'customer-profile', value: this.base + 'customer' },
    { key: 'customer-profile-state', value: this.base + 'customer/state' },
    { key: 'customer-profile-update', value: this.base + 'customer/update' },
    //supervisor
    { key: 'supervisor-profile', value: this.base + 'supervisor' },
  ];

  constructor() { }

  getUrl(key: any) {
    let path: string = this.base;
    this.url.forEach(e => {
      if (e.key == key) {
        path = e.value;
      }
    })
    return path;
  }

}
