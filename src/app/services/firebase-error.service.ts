import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebaseCodeError';

@Injectable({
  providedIn: 'root',
})
export class FirebaseErrorService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'User Already Exists';
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'Password is too Weak';
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'The email is invalid';
      case FirebaseCodeErrorEnum.PasswordRequired:
        return 'Password is required';
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'Wrong Password';
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'User not Found';
      default:
        return 'Unknown Error';
    }
  }
}
