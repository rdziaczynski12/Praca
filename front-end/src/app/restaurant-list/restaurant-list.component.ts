import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DishService } from '../service/dish.service';
import { Dish } from '../model/Dish';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

export interface DialogData {
  restaurant: Restaurant;
}

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  constructor(private restaurantService: RestaurantService, public dialog: MatDialog ) { }

  displayedColumns: string[] = ['id', 'name', 'address', "email", "phone", "edit", "delete"];
  
  restaurant: Restaurant = new Restaurant();
  restaurants: Restaurant[];

  ngOnInit() {
    this.getAllRestaurant();
  }
  
  getAllRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(data => {
      this.restaurants = data;
    })
  }

  openEditRestaurant(restaurant: Restaurant){
    const dialogRef = this.dialog.open(EditRestaurantDialog, {
      width: '450px',
      data: { restaurant}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllRestaurant();
      }
    });
  }

  openAddRestaurant(){
    const dialogRef = this.dialog.open(AddRestaurantDialog, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != null) {
        this.getAllRestaurant();
      }
    });
  }

  deleteRestaurant(id: Number){
    this.restaurantService.deleteRestaurant(id).subscribe(data => {
      this.getAllRestaurant();
    });
  }

}


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list-edit.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class EditRestaurantDialog implements OnInit {

  restaurant: Restaurant = new Restaurant();
  restaurantList: Restaurant[];

  editForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phoneNumber: new FormControl('', [
      Validators.required
    ]),
    openHour: new FormControl(new Date(), [
      Validators.required
    ]),
    closeHour: new FormControl(new Date(), [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<EditRestaurantDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private restaurantService: RestaurantService,
  ) {
    this.restaurant = this.data.restaurant;
  }

  ngOnInit(){
    this.restaurant.openHour = new Date (this.restaurant.openHour);
    this.restaurant.closeHour = new Date (this.restaurant.closeHour);
    this.editForm.get('name').setValue(this.restaurant.name);
    this.editForm.get('address').setValue(this.restaurant.address);
    this.editForm.get('email').setValue(this.restaurant.email);
    this.editForm.get('phoneNumber').setValue(this.restaurant.phoneNumber);
    this.editForm.get('openHour').setValue(this.restaurant.openHour);
    this.editForm.get('closeHour').setValue(this.restaurant.closeHour);
  }

  cancel(){
    this.dialogRef.close();
  }

  editRestaurant(){
    if(this.editForm.valid) {
      this.restaurant.name = this.editForm.get('name').value;
      this.restaurant.address = this.editForm.get('address').value;
      this.restaurant.email = this.editForm.get('email').value;
      this.restaurant.phoneNumber = this.editForm.get('phoneNumber').value;
      this.restaurant.openHour = this.editForm.get('openHour').value;
      this.restaurant.closeHour = this.editForm.get('closeHour').value;
      this.restaurantService.editRestaurant(this.restaurant).subscribe(data => {
        this.dialogRef.close(this.restaurant);
      })
    } 
  }

  getAllRestaurant(){
    this.restaurantService.getAllRestaurant().subscribe(data => {
      this.restaurantList = data;
    })
  }

}


//Add
//////////////////////////////////////////////////////////////

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list-add.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class AddRestaurantDialog implements OnInit {

  restaurant: Restaurant = new Restaurant();

  addForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phoneNumber: new FormControl('', [
      Validators.required
    ]),
    openHour: new FormControl('', [
      Validators.required
    ]),
    closeHour: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<AddRestaurantDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private restaurantService: RestaurantService,
  ) {
    
  }

  ngOnInit(){
  }

  cancel(){
    this.dialogRef.close();
  }

  addRestaurant(){
    if(this.addForm.valid) {
      this.restaurant.name = this.addForm.get('name').value;
      this.restaurant.address = this.addForm.get('address').value;
      this.restaurant.email = this.addForm.get('email').value;
      this.restaurant.phoneNumber = this.addForm.get('phoneNumber').value;
      this.restaurant.openHour = this.addForm.get('openHour').value;
      this.restaurant.closeHour = this.addForm.get('closeHour').value;
      this.restaurantService.addRestaurant(this.restaurant).subscribe(data => {
        this.dialogRef.close(this.restaurant);
      })
    } 
  }

}

