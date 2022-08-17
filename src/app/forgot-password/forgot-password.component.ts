import { Component, OnInit } from '@angular/core';
import { User } from '../auth/models/user';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  message: any;
  errorMessage: any;
  isCodeSent : boolean = false;
  isCodeValid: boolean = false;
  isSuccessful: boolean = false;

  constructor(private authService : AuthService) { }

  username : string = '';
  resetToken : any = {
    token : ''
  }
  reset : any = {
    password : '',
    confirmPassword : '',
    token:''
  }
  ngOnInit(): void {
  }

  getResetToken(){
      const user  = new User({username : this.username})
      this.authService.forgotPassword(user).subscribe({
        next : (data) => {
          this.message = "We have sent a reset code to your email. Please check.";
          this.isCodeSent = true;
      },
      error : (err) => {
        this.errorMessage = err.error.message;
        this.isCodeSent = true;
      }
    });
  }

  validateResetToken(){
    this.authService.validateResetToken(this.resetToken).subscribe({
      next : (data) => {
        this.isCodeSent = true;
        this.isCodeValid = true
        this.message = '';
    },
    error : (err) => {
      this.errorMessage = err.error.message;
      this.isCodeSent = true;
    }
  });
}

resetPassword(){
  if(this.reset.password == this.reset.confirmPassword){
    this.reset.token = this.resetToken.token;
  this.authService.resetPassword(this.reset).subscribe({
    next : (data) => {
      this.isCodeSent = true;
      this.isCodeValid = true;
      this.isSuccessful - true;
      this.message = "Your Password has been changed succusfully, please login again"
  },
  error : (err) => {
    this.errorMessage = err.error.message;
    this.isCodeSent = true;
  }
});
  }
  else{
    this.message = "password and confirm password should be same";
  }
}
}
