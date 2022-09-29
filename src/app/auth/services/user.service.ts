import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user';
import { Role } from '../models/role';
const API_URL = 'https://radiant-headland-28157.herokuapp.com/api/user/';
//const API_URL = 'http://localhost:8080/api/user/';// '/api/user/';

const USERNAME = 'USERNAME';
const USER_KEY = "user";
const USER_ROLES = "user_roles";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userSubject = new BehaviorSubject<User | null>(null);
  public isAdmin = new BehaviorSubject<boolean>(false);
  public isSeller = new BehaviorSubject<boolean>(false);
  public isCustmor = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  
  findOne(username : string): Observable<any> {
    return this.http.get(API_URL + 'findOne/'+username,httpOptions);
  }

  setUserToAppLevel(): Observable<any> {
    return this.http.get<User>(API_URL + 'findOne/'+this.getUsername(),httpOptions);
  }

  public saveUsername(username: string): void {
    window.localStorage.removeItem(USERNAME);
    window.localStorage.setItem(USERNAME, username);
  }

  public getUsername(): string | null {
    return window.localStorage.getItem(USERNAME);
  }

  // public saveUser(user: any): void {
  //   window.localStorage.removeItem(USER_KEY);
  //   window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  // }

  public saveUserDetailsInStorage(user: User | null): void {

    console.log("ifnotuser",user);
    if(user != null){
      console.log("ifuser",user);
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    window.localStorage.removeItem(USER_ROLES);
    window.localStorage.setItem(USER_ROLES, JSON.stringify(user.roles));
    this.isAdmin.next(user.roles?.indexOf(Role.Admin)>-1);
    this.isSeller.next(user.roles?.indexOf(Role.Seller)>-1);
    this.isCustmor.next(user.roles?.indexOf(Role.User)>-1);
    }
  }

  public getRoles(): any {
    const roles = window.localStorage.getItem(USER_ROLES);
    if (roles) {
      return JSON.parse(roles);
    }
    return {};
  } 
  
  public getUser(): User | null{
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  } 
}

