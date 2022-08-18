import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
// const API_URL = 'http://radiant-headland-28157.herokuapp.com/api/user';
const API_URL = '/api/user/'//'http://localhost:8080/api/user/';
const USERNAME = 'USERNAME';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) { }
  findOne(username : string): Observable<any> {
    return this.http.get(API_URL + 'findOne/'+username);
  }

  setUserToAppLevel(): Observable<any> {
    return this.http.get<User>(API_URL + 'findOne/'+this.getUsername(),httpOptions);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  public saveUsername(username: string): void {
    window.localStorage.setItem(USERNAME, username);
  }

  public getUsername(): string | null {
    return window.localStorage.getItem(USERNAME);
  }
}
