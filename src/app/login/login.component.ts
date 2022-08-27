import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { JwtResponse } from '../auth/models/jwt-response';
import { User } from '../auth/models/user';
import { AuthService } from '../auth/services/auth.service';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { UserService } from '../auth/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    this.login = new FormGroup({
      username: new FormControl("", Validators.compose([
        Validators.email
      ])),
      password: new FormControl("")
    });

    if (this.tokenStorage.getToken() && this.tokenStorage.getToken() != '') {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(val: any): void {

    if (this.login.valid) {
      this.authService.login(val.username, val.password).subscribe({
        next: (data: JwtResponse) => {
          this.userService.saveUsername(val.username);
          this.tokenStorage.saveToken(data.token ? data.token : '');
          this.tokenStorage.tokenSubject.next(data.token);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
    else {
      this.login.get('username').touched = true;
      this.login.get('password').touched = true;
      this.login.get('username').touched = true;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

  get username() { return this.login.get('username'); }

  get password() { return this.login.get('password'); }
}
