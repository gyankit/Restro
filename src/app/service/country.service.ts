import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private url: UrlService, private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.post<any>(this.url.getUrl('country'), {});
  }
}
