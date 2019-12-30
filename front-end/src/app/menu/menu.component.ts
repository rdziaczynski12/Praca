import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Validators, FormControl, FormGroup } from '@angular/forms';

export interface DialogData {
  menu: Menu;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuList: Menu[];
  constructor(private menuService: MenuService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.menuService.getAllMenu().subscribe(date => {
      this.menuList = date;
    });
  }

  activeMenu(id: Number){
    this.menuService.activeMenu(id).subscribe(date => {
      this.ngOnInit();
    });
  }
  
  editMenu(menu: Menu){
    const dialogRef = this.dialog.open(EditMenuDialog, {
      width: '450px',
      data: { menu}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.ngOnInit();
      }
    });
  }

  deleteMenu(id: Number){
    this.menuService.deleteMenu(id).subscribe(date => {
      this.ngOnInit();
    });
  }

  addMenu(menu: Menu){
    this.menuService.addMenu(menu).subscribe(date => {
      this.ngOnInit();
    });
  }

}




@Component({
  selector: 'edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuDialog implements OnInit {

  menu: Menu = new Menu();
  currentDate = new FormControl(new Date());
  date1 = new FormControl(new Date());

  editForm = new FormGroup({
    startDate: new FormControl(new Date(), [
      Validators.required
    ]),
    finishDate: new FormControl(new Date(), [
      Validators.required
    ]),
    deliveryTime: new FormControl(new Date(), [
      Validators.required
    ]),
    dishes: new FormControl('', [
      //Validators.required
    ]),
  });

  constructor(public dialogRef: MatDialogRef<EditMenuDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private menuService: MenuService,
  ) {
    this.menu = this.data.menu;
    this.menu.startDate = new Date (this.menu.startDate);
    this.menu.finishDate = new Date (this.menu.finishDate);
    this.menu.deliveryTime = new Date (this.menu.deliveryTime);
  }

  ngOnInit(){
    this.editForm.get('startDate').setValue(this.menu.startDate);
    this.editForm.get('finishDate').setValue(this.menu.finishDate);
    this.editForm.get('deliveryTime').setValue(this.menu.deliveryTime);
    this.editForm.get('dishes').setValue(this.menu.dishes);
  }

  cancel(){
    this.dialogRef.close();
  }

  editMenu(){
    if(this.editForm.valid) {
      this.menu.startDate = this.editForm.get('startDate').value;
      this.menu.finishDate = this.editForm.get('finishDate').value;
      this.menu.deliveryTime = this.editForm.get('deliveryTime').value;
      this.menu.dishes = this.editForm.get('dishes').value;
      console.log(this.menu);
      this.menuService.editMenu(this.menu).subscribe(data => {
        this.dialogRef.close(this.menu);
      })
    } 
  }

}
