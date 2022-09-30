import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Business } from '../models/business';
import { BusinessService } from './business.service';

const API_URL = 'http://localhost:8080/api/unit/';//'/api/category/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  public unitSubject = new BehaviorSubject<string[] | null>(null);

  constructor(private http: HttpClient,private businessService : BusinessService) { 
    this.businessService.businessSubject.subscribe((b : Business | null)=>{
      if(b != null){
        this.unitSubject.next(b.units);
      }
    });
  }

  save(unit : string): Observable<any> {
    let units = [];
    units.push(unit);
    return this.http.post<string>(API_URL + 'save',units, httpOptions);
  }
}
