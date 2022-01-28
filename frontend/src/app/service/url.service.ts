import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  base: string = 'http://localhost:8000/web/';

  url = {
    'default': [
      { key: 'login', value: this.base + 'login' },
      { key: 'upload', value: this.base + 'upload' },
      { key: 'country', value: this.base + 'country' },
      { key: 'register', value: this.base + 'register' },
    ],
    'vendor': [
      { key: 'menu', value: this.base + 'menu' },
      { key: 'order', value: this.base + 'order' },
      { key: 'record', value: this.base + 'record' },
      { key: 'profile', value: this.base + 'vendor' },
      { key: 'menu-state', value: this.base + 'menu/state' },
      { key: 'order-state', value: this.base + 'order/state' },
      { key: 'record-state', value: this.base + 'record/state' },
      { key: 'menu-create', value: this.base + 'menu/create' },
      { key: 'menu-update', value: this.base + 'menu/update' },
      { key: 'menu-delete', value: this.base + 'menu/delete' },
      { key: 'profile-update', value: this.base + 'vendor/update' },
    ],
    'customer': [
      { key: 'register', value: this.base + 'customer/create' },
    ]
  };

  constructor() { }

  getDefaultUrl(key: any) {
    let path: string = this.base;
    this.url.default.forEach(e => {
      if (e.key == key) {
        path = e.value;
      }
    })
    return path;
  }

  getCustomerUrl(key: any) {
    let path: string = this.base;
    this.url.customer.forEach(e => {
      if (e.key == key) {
        path = e.value;
      }
    })
    return path;
  }

  getVendorUrl(key: any) {
    let path: string = this.base;
    this.url.vendor.forEach(e => {
      if (e.key == key) {
        path = e.value;
      }
    })
    return path;
  }

}
