import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  openLogin() {
    this.router.navigateByUrl("/login");
  }

  openRegister() {
    this.router.navigateByUrl("/register");
  }

}
