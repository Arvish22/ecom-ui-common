import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Role } from '../auth/models/role';
import { User } from '../auth/models/user';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register : any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.register  = new FormGroup({
      username: new FormControl("",Validators.compose([Validators.email,Validators.required])),
      password: new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])),
      phone : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("(0|91)?[0-9][0-9]{9}")
      ]))
    });
  }

  onSubmit(user: User): void {
  if(this.register.valid){
    user.roles = [Role.Admin,Role.User];
    user.email = user.username;
    this.authService.register(user).subscribe({
      next: (v) => {
        console.log(v);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (e) => {
        this.errorMessage = e.error.message;
        this.errorMessage = "Email is already registered";
        this.isSignUpFailed = true;
      },
      complete: () => console.info('complete') 
  })
}else{
  this.register.get('username').touched = true;
  this.register.get('password').touched = true;
  this.register.get('phone').touched = true;
}
  }

  get username() { return this.register.get('username'); }

  get password() { return this.register.get('password'); }

  get phone() { return this.register.get('phone'); }
}
