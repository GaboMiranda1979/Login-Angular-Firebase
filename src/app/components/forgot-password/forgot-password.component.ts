import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  userRecovery: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseErrorService
  ) {
    this.userRecovery = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  recovery() {
    const email = this.userRecovery.value.email;
    this.loading = true;
    this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.toastr.info(
          'We send you an email to reset your Password',
          'Reset PassWord'
        );
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      });
  }
}
