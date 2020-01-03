import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DishService } from '../service/dish.service';
import { Dish } from '../model/Dish';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { TypeDish } from '../model/typeDish';
import { TypeDishService } from '../service/type-dish.service';

export interface DialogData {
  typeDish: TypeDish;
}

@Component({
  selector: 'app-type-dish-list',
  templateUrl: './type-dish-list.component.html',
  styleUrls: ['./type-dish-list.component.css']
})
export class TypeDishListComponent implements OnInit {
  constructor(private typeDishService: TypeDishService, public dialog: MatDialog ) { }

  displayedColumns: string[] = ['id', 'name', "edit", "delete"];
  
  typeDish: TypeDish = new TypeDish();
  typeDishs: TypeDish[];

  ngOnInit() {
    this.getAllTypeDish();
  }
  
  getAllTypeDish(){
    this.typeDishService.getAllTypeDish().subscribe(data => {
      this.typeDishs = data;
    })
  }

  openEditTypeDish(typeDish: TypeDish){
    const dialogRef = this.dialog.open(EditTypeDishDialog, {
      width: '450px',
      data: {typeDish}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllTypeDish();
      }
    });
  }

  openAddTypeDish(){
    const dialogRef = this.dialog.open(AddTypeDishDialog, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllTypeDish();
      }
    });
  }

  deleteTypeDish(id: Number){
    this.typeDishService.deleteTypeDish(id).subscribe(data => {
      this.getAllTypeDish();
    });
  }

}


@Component({
  selector: 'app-type-dish-list',
  templateUrl: './type-dish-list-edit.component.html',
  styleUrls: ['./type-dish-list.component.css']
})
export class EditTypeDishDialog implements OnInit {

  typeDish: TypeDish = new TypeDish();

  editForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<EditTypeDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private typeDishService: TypeDishService,
  ) {
    this.typeDish = this.data.typeDish;
  }

  ngOnInit(){
    this.editForm.get('name').setValue(this.typeDish.name);
  }

  cancel(){
    this.dialogRef.close();
  }

  editTypeDish(){
    if(this.editForm.valid) {
      this.typeDish.name = this.editForm.get('name').value;
      this.typeDishService.editTypeDish(this.typeDish).subscribe(data => {
        this.dialogRef.close(this.typeDish);
      })
    } 
  }

}


//Add
//////////////////////////////////////////////////////////////

@Component({
  selector: 'app-type-dish-list',
  templateUrl: './type-dish-list-add.component.html',
  styleUrls: ['./type-dish-list.component.css']
})
export class AddTypeDishDialog implements OnInit {

  typeDish: TypeDish = new TypeDish();

  addForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<AddTypeDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private typeDishService: TypeDishService,
  ) {
    
  }

  ngOnInit(){
  }

  cancel(){
    this.dialogRef.close();
  }

  addTypeDish(){
    if(this.addForm.valid) {
      this.typeDish.name = this.addForm.get('name').value;
      this.typeDishService.addTypeDish(this.typeDish).subscribe(data => {
        this.dialogRef.close(this.typeDish);
      })
    } 
  }

}
