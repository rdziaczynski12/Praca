import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { OrderDish } from '../model/orderDish';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public API = '/api';
  constructor(private http: HttpClient) { }

  getAllMenu(): Observable<any> {
    return this.http.get(`${this.API}/menu/list`, httpOptions);
  }
  editMenu(menu: Menu){
    return this.http.put(`${this.API}/menu/edit`, menu, httpOptions);
  }
  activeMenu(id: Number){
    return this.http.post(`${this.API}/menu/active`, id, httpOptions);
  }
  deleteMenu(id: Number){
    return this.http.post(`${this.API}/menu/delete`, id, httpOptions);
  }
  addMenu(menu: Menu){
    return this.http.post(`${this.API}/menu/add`, menu, httpOptions);
  }
  getActiveMenu(): Observable<any> {
    return this.http.get(`${this.API}/menu/list/active`, httpOptions);
  }
  archiveMenu(id: Number){
    return this.http.post(`${this.API}/menu/archive`, id, httpOptions);
  }
  getNotArchiveMenu(): Observable<any> {
    return this.http.get(`${this.API}/menu/list/not-archive`, httpOptions);
  }
  getMenuIsOrder(): Observable<any> {
    return this.http.get(`${this.API}/menu/list/is-order`, httpOptions);
  }
  
}
