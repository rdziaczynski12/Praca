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
    return this.http.get(`${this.API}/user/list`);
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

  activUser(id: Number){
    return this.http.post(`${this.API}/user/activ/${id}`, httpOptions);
  }

  getAllMenu(): Observable<any> {
    return this.http.get(`${this.API}/uber/menu`);
  }

  getUserData(userName: String): Observable<any> {
    return this.http.get(`${this.API}/user/data/${userName}`);
  }

  changePassword(userName: String, password: String, newPassword: String): Observable<any>{
    const body = {userName: userName, password: password, newPassword: newPassword}
    return this.http.post(`${this.API}/user/change/password`, body, httpOptions);
  }

  changeEmail(userName: String, email: String): Observable<any>{
    const body = {userName: userName, email: email}
    return this.http.post(`${this.API}/user/change/email`, body, httpOptions);
  }

}