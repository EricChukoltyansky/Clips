import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  credentials = {
    email: '',
    password: '',
  };

  showAlert = false;
  alertMsg = `Please wait, you're being logged in...`;
  alertColor = 'blue';

  login() {
    this.showAlert = true;
    this.alertMsg = `Please wait, you're being logged in...`;
    this.alertColor = 'blue';
  }
}
