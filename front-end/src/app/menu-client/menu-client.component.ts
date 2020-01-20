import { Component, OnInit, SystemJsNgModuleLoader, Inject } from '@angular/core';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';
import { OrderDish } from '../model/orderDish';
import { OrderService } from '../service/order.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  menu: Menu;
  iOrder: Map<String, Number>;
}

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {
  
  menuList: Menu[];
  tmp: any;
  tmp2: any;
  tmp3: any;
  iOrder = new Map<String, Number>();
  //iDish: number[] = new Array;
  //orders: Order[] = new Array;
  i: number = 0;
  orderDishs: Set<OrderDish> = new Set();
  orderDish: OrderDish = new OrderDish();
  isLoading: boolean = false;
  //order: Order = new Order();
  constructor(
    private menuService: MenuService,
    private orderService: OrderService,
    private tokenStorageService: TokenStorageService,
    public dialog: MatDialog,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    this.menuService.getActiveMenu().subscribe(date => {
      this.menuList = date;
      this.clearIOrder();
      this.isLoading = true;
    });
  }

  openAddOrder(menu: Menu){
    //let flaga = false;
    const dialogRef = this.dialog.open(AddOrderDialog, {
      width: '450px',
      data: { menu: menu, iOrder: this.iOrder}
    });
    // menu.dishes.forEach(dish => {
    //   this.tmp=[menu.id,dish.id];
    //   if(this.iOrder.get(this.tmp.toString())>0)
    //     flaga = true;
    // });
    // if(flaga)
      dialogRef.afterClosed().subscribe(result => {
        if(result != null) {
          this.addOrder(menu);
        }
      });
  }

  addOrder(menu: Menu){
    this.isLoading = false;
    this.orderService.addOrder(menu, this.tokenStorageService.getUsername()).subscribe(data => {
      this.menuList.forEach(m => {
        if(m == menu){
          m.dishes.forEach(dish => {
            this.tmp=[menu.id,dish.id];
            if(this.iOrder.get(this.tmp.toString())>0){
              this.orderDish.order = data;
              this.orderDish.dish=dish;
              this.orderDish.quantity=this.iOrder.get(this.tmp.toString());
              this.orderDishs.add(this.orderDish);
              this.orderDish = new OrderDish();
            }
          });
        }
      });
      this.orderDishs.forEach(order => {
        setTimeout(() => {
          this.orderService.addOrderDishs(order).subscribe();
        }, this.i * 500);
        this.i++;
      });
      this.orderDishs = new Set();
      
      setTimeout(() => {
        this.isLoading = true;
        this.router.navigate(['/my-order']);
      }, this.i * 500);
      this.clearIOrder();
    });

    
  }

  addQuantity(idDish: Number, idMenu: Number) {
    this.tmp=[idMenu,idDish];
    this.iOrder.set(this.tmp.toString(), this.iOrder.get(this.tmp.toString()).valueOf()+1)
  }

  deleteQuantity(idDish: number, idMenu: number) {
    this.tmp=[idMenu,idDish];
    this.iOrder.set(this.tmp.toString(), this.iOrder.get(this.tmp.toString()).valueOf()-1)
    if(this.iOrder.get(this.tmp.toString())<0)
      this.iOrder.set(this.tmp.toString(), 0)
  }

  getQuantity(idDish: Number, idMenu: Number): Number{
    this.tmp2=[idMenu,idDish];
    return this.iOrder.get(this.tmp2.toString());
  }

  getSum(menu: Menu): Number{
    let sum: number = 0;
    menu.dishes.forEach(dish => {
      this.tmp3=[menu.id,dish.id];
      sum += this.iOrder.get(this.tmp3.toString()).valueOf()*dish.price.valueOf();
    });
    return sum;
  }

  clearIOrder(){
    this.iOrder = new Map<String, Number>();
    this.menuList.forEach(menu => {
      menu.dishes.forEach(dish =>{
        this.tmp = [menu.id,dish.id];
        this.iOrder.set( this.tmp.toString(), 0);
      });
      // this.iDish[this.i] = menu.dishes.length;
      // this.i++;
    });
    this.i =0;
  }
}

//Add
////////////////////////////////////////////////////////////////

@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class AddOrderDialog implements OnInit {

  menu: Menu = new Menu();
  iOrder = new Map<String, Number>();
  tmp: any;
  tmp2: any;

  constructor(public dialogRef: MatDialogRef<AddOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ){
  }

  ngOnInit(){
    this.menu = this.data.menu;
    this.iOrder = this.data.iOrder;
  }

  cancel(){
    this.dialogRef.close();
  }

  addOrder(){
    this.dialogRef.close(this.menu);
  }

  getQuantity(idDish: Number, idMenu: Number): Number{
    this.tmp=[idMenu,idDish];
    return this.iOrder.get(this.tmp.toString());
  }

  getSum(menu: Menu): number{
    let sum: number = 0;
    menu.dishes.forEach(dish => {
      this.tmp2=[menu.id,dish.id];
      sum += this.iOrder.get(this.tmp2.toString()).valueOf()*dish.price.valueOf();
    });
    return sum;
  }

}
