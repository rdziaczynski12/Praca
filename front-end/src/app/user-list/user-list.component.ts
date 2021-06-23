import { Component, OnInit, Inject } from '@angular/core';
import {UserService} from '../service/user.service';
import { User } from '../model/user';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog ) { }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', "username", "edit", "delete", "activ"];
  
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

  openEditUser(user: User){
    const dialogRef = this.dialog.open(EditUserDialog, {
      width: '450px',
      data: { user}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllUser();
      }
    });
  }

  deleteUser(id: Number){
    this.userService.deleteUser(id).subscribe(data => {
      this.getAllUser();
    });
  }

  activUser(id: Number){
    this.userService.activUser(id).subscribe(data => {
      this.getAllUser();
    });
  }
}


@Component({
  selector: 'user-list-edit',
  templateUrl: './user-list-edit.component.html',
  styleUrls: ['./user-list.component.css']
})
export class EditUserDialog implements OnInit {

  user: User = new User();

  editForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
  ) {
    this.user = this.data.user;
  }

  ngOnInit(){
    this.editForm.get('firstName').setValue(this.user.firstName);
    this.editForm.get('lastName').setValue(this.user.lastName);
    this.editForm.get('username').setValue(this.user.username);
  }

  cancel(){
    this.dialogRef.close();
  }

  editUser(){
    if(this.editForm.valid) {
      this.user.firstName = this.editForm.get('firstName').value;
      this.user.lastName = this.editForm.get('lastName').value;
      this.user.username = this.editForm.get('username').value;
      this.userService.editUser(this.user).subscribe(data => {
        this.dialogRef.close(this.user);
      })
    } 
  }

}
