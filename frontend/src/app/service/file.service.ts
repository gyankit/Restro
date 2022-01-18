import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _url: any;
  constructor(private url: UrlService, private http: HttpClient) { }

  uploadOne(file: File, fileName: any, type: any): Observable<Boolean> {
    this._url = this.url.getDefaultUrl('upload');
    const formData = new FormData();
    formData.append("file", file, fileName);
    formData.append("type", type);
    return this.http.post<Boolean>(this._url, formData);
  }

  uploadMany(files: File[], fileName: any, types: string[]): Observable<Boolean> {
    this._url = this.url.getDefaultUrl('uploads');
    const formData = new FormData();
    formData.append("type1", types[0]);
    formData.append("type2", types[1]);
    formData.append("owner", files[0], fileName);
    formData.append("shop", files[1], fileName);
    return this.http.post<Boolean>(this._url, formData);
  }

}
