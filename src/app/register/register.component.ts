import { Component, OnInit } from '@angular/core';
import { Role } from '../auth/models/role';
import { User } from '../auth/models/user';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register : any = {
    username: null,
    email: null,
    password: null,
    phone : null,
    confirmPassword : null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.register.password == this.register.confirmPassword){
    const user : User = this.register;
    user.roles = [Role.Admin,Role.User];
    user.username = this.register.email;
    this.authService.register(user).subscribe({
      next: (v) => {
        console.log(v);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (e) => {
        this.errorMessage = e.error.message;
        this.isSignUpFailed = true;
      },
      complete: () => console.info('complete') 
  })
}else{
  this.errorMessage = "password and confirm password should be same";
}
  }
}
