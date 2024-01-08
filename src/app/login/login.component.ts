import { Component, OnInit } from '@angular/core';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule } from '@nebular/theme';
import { Router, RouterModule } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username:any=""
 password:any=""
 header:string="login";
  constructor(private authService: NbAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    this.router.navigate(['/register']);
  }
  onSubmit(): void {
    this.authService.authenticate('email', { userName: this.username, password: this.password })
      .subscribe((authResult: NbAuthResult) => {
    
          this.router.navigate(['/shortUrl']);
      
      });
  }

}
