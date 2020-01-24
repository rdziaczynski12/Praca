import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderDish } from '../model/orderDish';
import { OrderService } from '../service/order.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Menu } from '../model/menu';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  orders: Order[];
  menus: Menu[];
  orderDishs: OrderDish[];
  quantityMap = new Map<Number, Number>();

  constructor(private orderService: OrderService,
        private menuService: MenuService,
    ) { }

  ngOnInit() {
    this.menuService.getMenuIsOrder().subscribe(data => {
      this.menus = data;
    });

  }

  getOrderDish(order: Order){
    this.orderService.getOrderDish(order).subscribe(data => {
      this.orderDishs = data;
      this.orderDishs.forEach(orderDish => {
        if(this.quantityMap.has(orderDish.dish.id))
          this.quantityMap.set(orderDish.dish.id, orderDish.quantity.valueOf()+this.quantityMap.get(orderDish.dish.id).valueOf());
        else
          this.quantityMap.set(orderDish.dish.id, orderDish.quantity);
      });
    });
  }

  getOrderByMenu(menu: Menu){
    this.quantityMap = new Map<Number, Number>();
    this.orderService.getOrderByMenu(menu).subscribe(data => {
      this.orders = data;
      this.orders.forEach(order => {
        this.getOrderDish(order);
      });
    });
  }

  getQuantityDish(id: Number): Number{
    return this.quantityMap.get(id);
  }

}
