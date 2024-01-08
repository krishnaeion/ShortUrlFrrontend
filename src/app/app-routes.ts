import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShortUrlComponent } from './short-url/short-url.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shortUrl', component: ShortUrlComponent },
  { path: '**', redirectTo: '/login' }
];


