import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  base: string = 'http://localhost:4201/web/';

  url = {
    'default': [
      { key: 'country', value: this.base + 'country' },
      { key: 'login', value: this.base + 'login' },
    ],
    'vendor': [
      { key: 'register', value: this.base + 'vendor/create' },
      { key: 'profile', value: this.base + 'vendor' },
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
