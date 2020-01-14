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
  dish: Dish;
}

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  constructor(private dishService: DishService, public dialog: MatDialog ) { }

  displayedColumns: string[] = ['id', 'name', 'description', "price", "restaurant", "edit", "delete"];
  
  dish: Dish = new Dish();
  dishs: Dish[];

  ngOnInit() {
    this.getAllDish();
  }
  
  getAllDish(){
    this.dishService.getAllDish().subscribe(data => {
      this.dishs = data;
    })
  }

  openEditDish(dish: Dish){
    const dialogRef = this.dialog.open(EditDishDialog, {
      width: '450px',
      data: { dish}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllDish();
      }
    });
  }

  openAddDish(){
    const dialogRef = this.dialog.open(AddDishDialog, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllDish();
      }
    });
  }

  deleteDish(id: Number){
    this.dishService.deleteDish(id).subscribe(data => {
      this.getAllDish();
    });
  }

}
//Edit///////////////

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list-edit.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class EditDishDialog implements OnInit {

  dish: Dish = new Dish();
  restaurantList: Restaurant[];
  types: TypeDish[];

  editForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9.]*'),
      Validators.min(0)
    ]),
    restaurant: new FormControl('', [
      Validators.required
    ]),
    type: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<EditDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dishService: DishService,
    private typeDishService: TypeDishService,
    private restaurantService: RestaurantService,
  ) {
    this.dish = this.data.dish;
  }

  ngOnInit(){
    this.getAllRestaurant();
    this.getAllTypeDish();
    this.editForm.get('name').setValue(this.dish.name);
    this.editForm.get('description').setValue(this.dish.description);
    this.editForm.get('price').setValue(this.dish.price.valueOf() / 100.0);
    this.editForm.get('restaurant').setValue(this.dish.restaurant);
    this.editForm.get('type').setValue(this.dish.types);
  }

  cancel(){
    this.dialogRef.close();
  }

  editDish(){
    if(this.editForm.valid) {
      this.dish.name = this.editForm.get('name').value;
      this.dish.description = this.editForm.get('description').value;
      this.dish.price = this.editForm.get('price').value * 100;
      this.dish.restaurant = this.editForm.get('restaurant').value;
      this.dish.types = this.editForm.get('type').value;
      this.dishService.editDish(this.dish).subscribe(data => {
        this.dialogRef.close(this.dish);
      })
    } 
  }

  getAllRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(data => {
      this.restaurantList = data;
    })
  }

  getAllTypeDish(){
    this.typeDishService.getAllTypeDish().subscribe(data => {
      this.types = data;
    })
  }

  comparer(d1: any, d2: any): boolean {
    return d1 && d2 ? d1.id === d2.id : d1 === d2;
  }

}


//Add
//////////////////////////////////////////////////////////////

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list-add.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class AddDishDialog implements OnInit {

  dish: Dish = new Dish();
  restaurantList: Restaurant[];
  types: TypeDish[];

  addForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9.]*'),
      Validators.min(0)
    ]),
    restaurant: new FormControl('', [
      Validators.required
    ]),
    type: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<AddDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dishService: DishService,
    private typeDishService: TypeDishService,
    private restaurantService: RestaurantService,
  ) {
    
  }

  ngOnInit(){
    this.getAllRestaurant();
    this.getAllTypeDish();
  }

  cancel(){
    this.dialogRef.close();
  }

  addDish(){
    if(this.addForm.valid) {
      this.dish.name = this.addForm.get('name').value;
      this.dish.description = this.addForm.get('description').value;
      this.dish.price = this.addForm.get('price').value * 100;
      this.dish.restaurant = this.addForm.get('restaurant').value;
      this.dish.types = this.addForm.get('type').value;
      this.dishService.addDish(this.dish).subscribe(data => {
        this.dialogRef.close(this.dish);
      })
    } 
  }

  getAllRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(data => {
      this.restaurantList = data;
    })
  }

  getAllTypeDish(){
    this.typeDishService.getAllTypeDish().subscribe(data => {
      this.types = data;
    })
  }

}
