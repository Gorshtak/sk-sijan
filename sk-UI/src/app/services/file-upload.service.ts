import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  url = '/raspored/create';

  uploadFile(fileToUpload: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    const req = new HttpRequest('POST', this.url, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

}
