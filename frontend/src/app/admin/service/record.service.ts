import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private _url: any;

  constructor(private http: HttpClient, private url: UrlService) { }

  getRequest(req: number, id: any): Observable<any> {
    this._url = this.url.getVendorUrl('record');
    return this.http.post<any>(this._url, {
      req: req, id: id
    });
  }

  stateRequest(id: any): Observable<any> {
    this._url = this.url.getVendorUrl('record-state');
    return this.http.post<any>(this._url, {
      req: 1, id: id
    });
  }
}
