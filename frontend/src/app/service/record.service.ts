import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/service/url.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getRequest(req: number, id: any): Observable<any> {
    return this.http.post<any>(this.url.getUrl('record'), {
      req: req, id: id
    });
  }

  stateRequest(id: any): Observable<any> {
    return this.http.post<any>(this.url.getUrl('record-state'), {
      req: 1, id: id
    });
  }
}
