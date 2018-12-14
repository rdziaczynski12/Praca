import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import { User } from '../model/user';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(private userService: UserService ) { }

  displayedColumns: string[] = ['id', 'name', 'password', "edit", "delete"];
  
  addForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  
  user: User = new User();
  users: User[];
  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
    })
  }

  addUser(){
    if(this.addForm.valid) {
      this.user.name = this.addForm.get('name').value;
      this.user.password = this.addForm.get('password').value;
      this.userService.addUser(this.user).subscribe(data => {
        this.getAllUser();
      });
    }
  }

  editUser(user: User){
    this.userService.editUser(user).subscribe();
  }

  deleteUser(id: Number){
    this.userService.deleteUser(id).subscribe(data => {
      this.getAllUser();
    });
  }
}
