import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../model/restaurant';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class RestaurantService {

  public API = '/api';

  constructor(private http: HttpClient) { }
  
  getAllRestaurant(): Observable<any> {
    return this.http.get(`${this.API}/restaurant/list`);
  }

  addRestaurant(restaurant: Restaurant){
    return this.http.post(`${this.API}/restaurant/add`, restaurant, httpOptions);
  }

  deleteRestaurant(id: Number){
    return this.http.delete(`${this.API}/restaurant/delete/${id}`, httpOptions);
  }

  editRestaurant(restaurant: Restaurant){
    return this.http.put(`${this.API}/restaurant/edit`, restaurant, httpOptions);
  }

}