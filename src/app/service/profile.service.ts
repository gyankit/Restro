import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/app/models/vendor';
import { UrlService } from 'src/app/service/url.service';
import { Customer } from '../models/customer';
import { Supervisor } from '../models/supervisor';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getVendorRequest(): Observable<any> {
    return this.http.post<any>(this.url.getUrl('vendor-profile'), {});
  }

  putVendorRequest(profile: Vendor): Observable<Vendor> {
    return this.http.put<Vendor>(this.url.getUrl('vendor-profile'), profile);
  }

  getCustomerRequest(): Observable<any> {
    return this.http.post<any>(this.url.getUrl('customer-profile'), {});
  }

  putCustomerRequest(profile: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url.getUrl('customer-profile'), profile);
  }

  getAdminRequest(type: number): Observable<any> {
    switch (type) {
      case 1:
        return this.http.post<any>(this.url.getUrl('vendor-profile'), {});
      case 2:
        return this.http.post<any>(this.url.getUrl('customer-profile'), {});
      default:
        return this.http.post<any>(this.url.getUrl('supervisor-profile'), { "req": false });
    }
  }

  stateRequest(type: number, id: string, state: boolean): Observable<any> {
    if (type === 1) {
      return this.http.put<any>(this.url.getUrl('vendor-profile-state'), { id: id, state: state });
    } else {
      return this.http.put<any>(this.url.getUrl('customer-profile-state'), { id: id, state: state });
    }
  }

  putAdminRequest(profile: Supervisor): Observable<Supervisor> {
    return this.http.put<Supervisor>(this.url.getUrl('supervisor-profile'), profile);
  }
}
