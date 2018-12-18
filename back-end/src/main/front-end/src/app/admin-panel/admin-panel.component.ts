import { Component, OnInit, Inject } from '@angular/core';
import {UserService} from '../service/user.service';
import { User } from '../model/user';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  user: User;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog ) { }

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
        //window.location.reload();
        this.getAllUser();
      });
    }
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
}


@Component({
  selector: 'admin-panel-edit',
  templateUrl: './admin-panel-edit.component.html',
  styleUrls: ['./admin-panel-edit.component.css']
})
export class EditUserDialog implements OnInit {

  user: User = new User();

  editForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
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
    this.editForm.get('name').setValue(this.user.name);
    this.editForm.get('password').setValue(this.user.password);
  }

  cancel(){
    this.dialogRef.close();
  }

  editUser(){
    if(this.editForm.valid) {
      this.user.name = this.editForm.get('name').value;
      this.user.password = this.editForm.get('password').value;
      this.userService.editUser(this.user).subscribe(data => {
        this.dialogRef.close(this.user);
      })
    } 
  }

}
