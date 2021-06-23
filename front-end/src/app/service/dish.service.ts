import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from '../model/Dish';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class DishService {
  public API = '/api';
  constructor(private http: HttpClient) { }
  getAllDish(): Observable<any> {
    return this.http.get(`${this.API}/dish/list`, httpOptions);
  }
  addDish(dish: Dish){
    return this.http.post(`${this.API}/dish/add`, dish, httpOptions);
  }
  deleteDish(id: Number){
    return this.http.delete(`${this.API}/dish/delete/${id}`, httpOptions);
  }
  editDish(dish: Dish){
    return this.http.put(`${this.API}/dish/edit`, dish, httpOptions);
  }
}
