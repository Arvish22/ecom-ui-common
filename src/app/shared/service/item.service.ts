import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Business } from '../models/business';
import { Item } from '../models/item';
import { BusinessService } from './business.service';

const API_URL = 'http://localhost:8080/api/item/';//'/api/category/';
const USERNAME = 'USERNAME';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public itemSubject = new BehaviorSubject<Item[] | null>(null);

  constructor(private http: HttpClient,private businessService : BusinessService) { 
    this.businessService.businessSubject.subscribe((b : Business | null)=>{
      if(b != null){
        this.itemSubject.next(b.items);
      }
    });
  }
  
  save(item : Item): Observable<any> {
    return this.http.post<Item>(API_URL + 'save',item , httpOptions);
  }
}
