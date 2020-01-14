import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../service/order.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Observable } from 'rxjs';
import { OrderDish } from '../model/orderDish';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orders: Order[];
  orderDishs: OrderDish[];
  isLoading: boolean = false;

  constructor(private orderService: OrderService,
    private tokenService: TokenStorageService,
    ) { }

  ngOnInit() {
    this.orderService.getOrderByUser(this.tokenService.getUsername()).subscribe(data => {
      this.orders = data;
      this.isLoading = true;
    });
  }

  getOrderDish(order: Order){
    this.orderService.getOrderDish(order).subscribe(data => {
      this.orderDishs = data;
    });
  }

}
