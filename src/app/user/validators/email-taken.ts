import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmailTaken {
  constructor(private auth: AngularFireAuth) {}

  validate = async (
    control: AbstractControl
  ): Promise<ValidationErrors | null> => {
    return this.auth.fetchSignInMethodsForEmail(control.value).then((res) => {
      if (res.length > 0) {
        return { emailTaken: true };
      }
      return null;
    });
  };
}
