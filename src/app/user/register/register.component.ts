import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.models';
import { RegisterValidators } from '../validators/register-validators';
import { EmailTaken } from '../validators/email-taken';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AuthService, private emailTaken: EmailTaken) {}

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);
  email = new FormControl(
    '',
    [Validators.required, Validators.email, Validators.minLength(3)],
    [this.emailTaken.validate]
  );
  age = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
    Validators.pattern('^[0-9]*$'),
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  ]);
  confirmPassword = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(13),
  ]);

  showAlert = false;
  alertMsg = 'Please wait, your account is being created...';
  alertColor = 'blue';
  inSubmisstion = false;

  registerForm = new FormGroup(
    {
      name: this.name,
      email: this.email,
      age: this.age,
      password: this.password,
      confirmPassword: this.confirmPassword,
      phoneNumber: this.phoneNumber,
    },
    [RegisterValidators.match('password', 'confirmPassword')]
  );

  async register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait, your account is being created...';
    this.alertColor = 'blue';
    this.inSubmisstion = true;

    try {
      await this.auth.createUser(this.registerForm.value as IUser);
    } catch (e: any) {
      this.alertMsg = e.message;
      this.alertColor = 'red';
      this.inSubmisstion = false;
      return;
    }

    this.alertMsg = 'Congrats, your account has been created!';
    this.alertColor = 'green';
  }
}
