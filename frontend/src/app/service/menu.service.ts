import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu';
import { UrlService } from 'src/app/service/url.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url: any;

  constructor(private http: HttpClient, private url: UrlService) { }

  getRequest(req: boolean, id: any): Observable<any> {
    this._url = this.url.getVendorUrl('menu');
    return this.http.post<any>(this._url, {
      req: req, id: id
    });
  }

  postRequest(menu: Menu): Observable<any> {
    this._url = this.url.getVendorUrl('menu-create');
    return this.http.post<any>(this._url, menu);
  }

  putRequest(menu: Menu): Observable<any> {
    this._url = this.url.getVendorUrl('menu-update');
    return this.http.put<any>(this._url, menu);
  }

  deleteRequest(id: any): Observable<any> {
    this._url = this.url.getVendorUrl('menu-delete');
    return this.http.delete<any>(`${this._url}/${id}`);
  }

  stateRequest(id: any): Observable<any> {
    this._url = this.url.getVendorUrl('menu-state');
    return this.http.post<any>(this._url, { id: id });
  }

}


