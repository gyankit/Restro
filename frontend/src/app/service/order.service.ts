import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/service/url.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getCustomerRequest(req: boolean): Observable<any> {
    return this.http.post<any>(this.url.getUrl('order'), {
      req: req
    });
  }

  getVendorRequest(req: boolean): Observable<any> {
    return this.http.post<any>(this.url.getUrl('order'), { req: req });
  }

  getAdminRequest(): Observable<any> {
    return this.http.post<any>(this.url.getUrl('order'), {});
  }

  createRequest(order: Order): Observable<any> {
    return this.http.post(this.url.getUrl('order-create'), order);
  }

  updateRequest(id: any, status: number): Observable<any> {
    return this.http.put<any>(this.url.getUrl('order-update'), {
      id: id, status: status
    });
  }

  deleteRequest(id: string): Observable<any> {
    return this.http.delete(`${this.url.getUrl('order-delete')}/${id}`);
  }
}
