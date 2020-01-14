import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { Menu } from '../model/menu';
import { OrderDish } from '../model/orderDish';
import { OrderService } from '../service/order.service';
import { MenuService } from '../service/menu.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { Dish } from '../model/Dish';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {

  orders: Order[];
  users= new Array<User>();
  menus: Menu[];
  orderDishs: OrderDish[];
  quantityMap = new Map<String, Number>();
  tmp: any;

  constructor(private orderService: OrderService,
    private menuService: MenuService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.menuService.getActiveMenu().subscribe(data => {
      this.menus = data;
    });

  }

  getOrderDish(order: Order){
    this.orderService.getOrderDish(order).subscribe(data => {
      this.orderDishs = data;
      this.orderDishs.forEach(orderDish => {
        this.tmp= [orderDish.order.user.id, orderDish.dish.id];
        if(this.quantityMap.has(this.tmp.toString()))
          this.quantityMap.set(this.tmp.toString(), orderDish.quantity.valueOf()+this.quantityMap.get(this.tmp.toString()).valueOf());
        else
          this.quantityMap.set(this.tmp.toString(), orderDish.quantity);
      });
    });
  }

  getOrderByMenu(menu: Menu){
    let i: number=0;
    this.quantityMap = new Map<String, Number>();
    this.users = new Array<User>();
    this.orderService.getOrderByMenu(menu).subscribe(data => {
      this.orders = data;
      this.orders.forEach(order => {
        this.users.forEach(user => {
          if(user.id == order.user.id)
            i++;
        });
        if(i==0)
          this.users.push(order.user);
        this.getOrderDish(order);
        i=0;
      });
    });
  }

  getQuantityDish(idUser: User, idDish: Dish): Number{
    this.tmp =[idUser, idDish];
    return this.quantityMap.get(this.tmp.toString());
  }

}
