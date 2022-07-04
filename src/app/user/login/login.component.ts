import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showAlert = false;
  alertMsg = `Please wait, you're being logged in...`;
  alertColor = 'blue';
  inSubmission = false;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  credentials = {
    email: '',
    password: '',
  };

  async login() {
    this.showAlert = true;
    this.alertMsg = `Please wait, you're being logged in...`;
    this.alertColor = 'blue';
    this.inSubmission = true;

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e: unknown | any) {
      this.inSubmission = false;
      this.alertMsg = `Login failed: ${e.message}`;
      this.alertColor = 'red';
      return;
    }

    this.alertMsg = `Login successful!`;
    this.alertColor = 'green';
  }
}
