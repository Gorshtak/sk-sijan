import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(f) {
    this.loginService.login(f).subscribe(
      response => {
        let userString = JSON.stringify(response);
        sessionStorage.setItem("User", userString);
        let user: User = JSON.parse(userString);
        console.log(user)
        user.role === 1 ? this.router.navigateByUrl("admin") : this.router.navigateByUrl("user");
      },
      error => {
        console.log(error);
      }

    )
  }

}
