import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: { userName: string; password: string }[] = [
    { userName: 'shashank@prideIndia.org', password: 'waitoka123' },
    { userName: 'shailesh@prideIndia.org', password: 'hola123' },
  ];

  myusername: string = '';
  mypassword: string = '';

  isAuthentic: boolean;
  submitted: boolean = false;

  checkUser() {
    this.submitted = true;
    if (
      this.myusername == this.users[1].userName &&
      this.mypassword == this.users[1].password
    )
      this.isAuthentic = true;
    else this.isAuthentic = false;
  }

  reset() {
    this.myusername = '';
    this.mypassword = '';

    this.isAuthentic;
    this.submitted = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
