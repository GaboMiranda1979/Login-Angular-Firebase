import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ValidateEmailComponent } from './components/validate-email/validate-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'user-register', component: UserRegisterComponent},
  {path: 'validate-email', component: ValidateEmailComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'dashboard', component: DashboardComponent},

  {path: '**', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
