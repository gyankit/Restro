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

  constructor(private http: HttpClient, private url: UrlService) { }

  getRequest(req: boolean, id: any): Observable<any> {
    return this.http.post<any>(this.url.getUrl('menu'), {
      req: req, id: id
    });
  }

  postRequest(menu: Menu): Observable<any> {
    return this.http.post<any>(this.url.getUrl('menu-create'), menu);
  }

  putRequest(menu: Menu): Observable<any> {
    return this.http.put<any>(this.url.getUrl('menu-update'), menu);
  }

  deleteRequest(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url.getUrl('menu-delete')}/${id}`);
  }

  stateRequest(id: any): Observable<any> {
    return this.http.post<any>(this.url.getUrl('menu-state'), { id: id });
  }

}


