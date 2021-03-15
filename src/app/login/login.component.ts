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

  myusername:string = '';
  mypassword:string = '';

  isValid: boolean = null;

  checkUser() {
    if (
      this.myusername == this.users[1].userName &&
      this.mypassword == this.users[1].password
    )
      this.isValid = true;
    else this.isValid = false;
  }
  constructor() {}

  ngOnInit(): void {}
}
