import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(fileToUpload: File): Observable<HttpEvent<{}>> {
    const endpoint = '/raspored/create';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    const req = new HttpRequest('POST', '/raspored/create', formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

}
