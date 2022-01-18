import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  base: string = 'http://localhost:4201/web/';

  url = {
    'default': [
      { key: 'login', value: this.base + 'login' },
      { key: 'upload', value: this.base + 'upload' },
      { key: 'uploads', value: this.base + 'uploads' },
      { key: 'country', value: this.base + 'country' },
      { key: 'vendor', value: this.base + 'vendor/create' },
      { key: 'customer', value: this.base + 'customer/create' },
      { key: 'supervisor', value: this.base + 'admin/create' },
    ],
    'vendor': [
      { key: 'profile', value: this.base + 'vendor' },
      { key: 'menu', value: this.base + 'menu' },
      { key: 'menu/create', value: this.base + 'menu/create' },
      { key: 'menu/update', value: this.base + 'menu/update' },
      { key: 'menu/delete', value: this.base + 'menu/delete' },
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
