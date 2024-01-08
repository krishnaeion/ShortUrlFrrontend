import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShortUrlComponent } from './short-url/short-url.component';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule,NbActionsModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { NbAuthJWTToken, NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import { routes } from './app-routes';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ShortUrlComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbButtonModule,
    RouterModule.forRoot(routes),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:3000', // Replace with your API endpoint
          login: {
            endpoint: '/login',
            method: 'post',
          },
          token: {
            class: NbAuthJWTToken, // Type of token (JWT in this case)
            key: 'access_token', // Token key in the response from the server
          },
          register: {
            endpoint: '/register',
            method: 'post',
          },
       
        }),
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
