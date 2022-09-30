import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Business } from '../models/business';
import { Category } from '../models/category';
import { BusinessService } from './business.service';

const API_URL = 'http://localhost:8080/api/category/';//'/api/category/';
const USERNAME = 'USERNAME';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categorSubject = new BehaviorSubject<Category[] | null>(null);

  constructor(private http: HttpClient,private businessService : BusinessService) { 
    this.businessService.businessSubject.subscribe((b : Business | null)=>{
      if(b != null){
        this.categorSubject.next(b.categories);
      }
    });
  }
  
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
