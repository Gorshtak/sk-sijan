import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RasporedService {

  constructor(private http: HttpClient) { }

  urlGetAll = "/raspored/getall";
  urlFilter = "/raspored/getbyfilters";
  urlGroups = "/raspored/getgroups";
  urlUpdateUser = "/raspored/updateuser";

  getAll() {
    return this.http.get(this.urlGetAll);
  }
  getByFilters(body) {
    return this.http.post(this.urlFilter, body);
  }
  getGroups() {
    return this.http.get(this.urlGroups);
  }
  updateUser(body) {
    return this.http.post(this.urlUpdateUser, body);
  }
}
