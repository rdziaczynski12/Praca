import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/order';
import { Menu } from '../model/menu';
import { OrderDish } from '../model/orderDish';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public API = '/api';
  constructor(private http: HttpClient) { }

  getAllOrder(): Observable<any> {
    return this.http.get(`${this.API}/order/list`, httpOptions);
  }
  editOrder(order: Order){
    return this.http.put(`${this.API}/order/edit`, order, httpOptions);
  }
  deleteOrder(id: Number){
    return this.http.post(`${this.API}/order/delete`, id, httpOptions);
  }
  addOrder(menu: Menu, userName: String): Observable<any>{
    return this.http.post(`${this.API}/order/add/${userName}`, menu, httpOptions);
  }

  addOrderDishs(orderDish: OrderDish): Observable<any>{
    return this.http.post(`${this.API}/order-dish/add`, orderDish, httpOptions);
  }

}