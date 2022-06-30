import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AngularFireAuth) {}

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(3),
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
    Validators.pattern('^[0-9]*$'),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
  ]);

  showAlert = false;
  alertMsg = 'Please wait, your account is being created...';
  alertColor = 'blue';

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  });

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait, your account is being created...';
    this.alertColor = 'blue';

    const { email, password } = this.registerForm.value;

    const userCred = await this.auth.createUserWithEmailAndPassword(
      email as string,
      password as string
    );
  }
}
