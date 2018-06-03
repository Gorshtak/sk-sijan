import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  url = "/user/add"

  doRegister(form) {
    console.log(form.value);
    let user: User = form.value;
    return this.http.post(this.url, user);
  }

}
