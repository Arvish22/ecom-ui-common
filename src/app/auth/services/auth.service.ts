import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { JwtResponse } from '../models/jwt-response';
const AUTH_API = 'https://radiant-headland-28157.herokuapp.com/api/';
// const AUTH_API = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }
    
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'authenticate', {
      username,
      password
    }, httpOptions);
  }

  register(user : User): Observable<any> {
    return this.http.post(AUTH_API + 'register', user, httpOptions);
  }

  forgotPassword(user : User): Observable<any> {
    return this.http.post(AUTH_API + 'forgot_password', user, httpOptions);
  }

  validateResetToken(token : any): Observable<any> {
    return this.http.post(AUTH_API + 'reset_password_token', token, httpOptions);
  }

  resetPassword(reset : any): Observable<any> {
    return this.http.post(AUTH_API + 'reset_password', reset, httpOptions);
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
}
}