import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeDish } from '../model/typeDish';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeDishService {

  public API = '/api';

  constructor(private http: HttpClient) { }

  getAllTypeDish(): Observable<any> {
    return this.http.get(`${this.API}/type/dish/list`, httpOptions);
  }

  addTypeDish(typeDish: TypeDish){
    return this.http.post(`${this.API}/type/dish/add`, typeDish, httpOptions);
  }

  deleteTypeDish(id: Number){
    return this.http.delete(`${this.API}/type/dish/delete/${id}`, httpOptions);
  }

  editTypeDish(typeDish: TypeDish){
    return this.http.put(`${this.API}/type/dish/edit`, typeDish, httpOptions);
  }
}
