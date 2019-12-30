import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class UserService {

  public API = '/api';

  constructor(private http: HttpClient) { }
  
  getAllUser(): Observable<any> {
    return this.http.get(`${this.API}/user`);
  }

  addUser(user: User){
    return this.http.post(`${this.API}/user/add`, user, httpOptions);
  }

  deleteUser(id: Number){
    return this.http.delete(`${this.API}/user/delete/${id}`, httpOptions);
  }

  editUser(user: User){
    return this.http.put(`${this.API}/user/edit`, user, httpOptions);
  }

  getAllMenu(): Observable<any> {
    return this.http.get(`${this.API}/uber/menu`);
  }

  activUser(id: Number){
    return this.http.post(`${this.API}/user/activ/${id}`, httpOptions);
  }

}