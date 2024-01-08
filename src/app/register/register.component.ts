import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthResult, NbAuthService } from '@nebular/auth';
export interface registrationData{
  fullName: string,
  email: string,
  password: string,
  mobileNumber:string,
  userName:string,
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registrationData:registrationData = {
   email: "",
   userName:"",
   password: "",
   fullName: '',
   mobileNumber: ''
 };
 header:string="Register";
  constructor(private authService: NbAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    
   
    this.authService.register('email', this.registrationData)
      .subscribe((authResult: NbAuthResult) => {
        console.log(authResult);
       
          
          this.router.navigate(['/login']);
       
      });
  }

}
