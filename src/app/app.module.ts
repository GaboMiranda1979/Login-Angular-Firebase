import { environment } from './../environments/environment.development';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ValidateEmailComponent } from './components/validate-email/validate-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserRegisterComponent,
    ValidateEmailComponent,
    ForgotPasswordComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
