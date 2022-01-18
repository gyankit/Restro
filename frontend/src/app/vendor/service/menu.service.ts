import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url: any;

  constructor(private http: HttpClient, private url: UrlService) { }

  getRequest(one: boolean, id: any): Observable<any> {
    this._url = this.url.getVendorUrl('menu');
    if (one) {
      return this.http.post<any>(this._url, {
        req: 'val', val: id
      });
    }
    return this.http.post<any>(this._url, {
      req: 'all'
    });
  }

  postRequest(menu: Menu): Observable<Menu> {
    this._url = this.url.getVendorUrl('menu/create');
    return this.http.post<Menu>(this._url, menu);
  }

  putRequest(menu: Menu): Observable<Menu> {
    this._url = this.url.getVendorUrl('profile');
    return this.http.put<Menu>(this._url, menu);
  }

  deleteRequest(id: any): Observable<Menu> {
    this._url = this.url.getVendorUrl('profile');
    return this.http.put<Menu>(this._url, { mid: id });
  }

}
