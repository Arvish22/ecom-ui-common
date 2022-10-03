import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Business } from '../models/business';

const API_URL = 'http://localhost:8080/api/business/';//'/api/category/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  public businessSubject = new BehaviorSubject<Business | null>(null);

  constructor(private http: HttpClient) { }
  
  save(business : Business): Observable<any> {
    return this.http.post<Business>(API_URL + 'save',business , httpOptions);
  }

  saveAll(business : Business[]): Observable<any> {
    return this.http.post<Business>(API_URL + 'saveAll',business , httpOptions);
  }

  findAll(): Observable<any> {
    return this.http.get<Business>(API_URL + 'findAll', httpOptions);
  }
  update(business : Business): Observable<any> {
    return this.http.put<Business>(API_URL + 'update', business,httpOptions);
  }
  deleteById(id:string): Observable<any> {
    return this.http.delete<Business>(API_URL + 'delete/'+id, httpOptions);
  }

  setBusinessData(userId:string){
    this.findByUser(userId).pipe(map(x=>{
      this.businessSubject.next(x);
    }));
  }

  findByUser(userId:string): Observable<any> {
    return this.http.delete<Business>(API_URL + 'find/by/'+userId, httpOptions);
  }
}
