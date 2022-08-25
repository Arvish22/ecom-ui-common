import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category';

const API_URL = '/api/category/';
const USERNAME = 'USERNAME';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categorSubject = new BehaviorSubject<Category[] | null>(null);

  constructor(private http: HttpClient) { }
  
  save(category : Category): Observable<any> {
    return this.http.post<Category>(API_URL + 'save',category , httpOptions);
  }

  saveAll(categories : Category[]): Observable<any> {
    return this.http.post<Category>(API_URL + 'saveAll',categories , httpOptions);
  }

  findAll(): Observable<any> {
    return this.http.get<Category>(API_URL + 'findAll', httpOptions);
  }
  update(category : Category): Observable<any> {
    return this.http.put<Category>(API_URL + 'update', category,httpOptions);
  }
  deleteById(id:string): Observable<any> {
    return this.http.delete<Category>(API_URL + 'delete/'+id, httpOptions);
  }

  public saveUsername(username: string): void {
    window.localStorage.setItem(USERNAME, username);
  }

  public getUsername(): string | null {
    return window.localStorage.getItem(USERNAME);
  }
}
