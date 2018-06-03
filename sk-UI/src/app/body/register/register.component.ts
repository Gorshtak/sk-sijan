import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(value) {
    this.registerService.doRegister(value).subscribe(
      response => {
        this.router.navigateByUrl("login");
      },
      error => {
        console.log(error);
      }
    )
  }

}
