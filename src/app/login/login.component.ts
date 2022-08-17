import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JwtResponse } from '../auth/models/jwt-response';
import { AuthService } from '../auth/services/auth.service';
import { TokenStorageService } from '../auth/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router : Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() && this.tokenStorage.getToken() != '') {
      this.isLoggedIn = true;
      //this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.login;
    this.authService.login(username, password).subscribe({
      next : (data : JwtResponse) => {
      this.tokenStorage.saveToken(data.token?data.token : '');
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigate(['/profile']);
    },
    error : (err) => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  });
  }
  reloadPage(): void {
    window.location.reload();
  }
}