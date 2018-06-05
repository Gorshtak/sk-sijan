import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RasporedService {

  constructor(private http: HttpClient) { }

  urlGetAll = "/raspored/getall"

  getAll() {
    return this.http.get(this.urlGetAll);
  }
}
