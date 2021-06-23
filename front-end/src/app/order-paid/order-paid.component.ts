import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../model/order';
import { User } from '../model/user';

export interface TableDate {
  user: User;
  cost: number;
  timeStart: Date;
  timeFinish: Date;
}

@Component({
  selector: 'app-order-paid',
  templateUrl: './order-paid.component.html',
  styleUrls: ['./order-paid.component.css']
})
export class OrderPaidComponent implements OnInit {
  constructor(private orderService: OrderService) { }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', "cost", 'time',  "paid"];
  
  orders: Order[];
  tableDate = new Map<Number, TableDate>();
  table: any;
  temp: TableDate = {user: null, cost: 0, timeStart: null, timeFinish: null};

  ngOnInit() {
    this.getAllOrderNotPaid();
  }

  getAllOrderNotPaid(){
    this.tableDate = new Map<Number, TableDate>();
    this.orderService.getAllOrderNotPaid().subscribe(data => {
      this.orders = data;
      this.orders.forEach(order => {
        this.temp.user = order.user;
        if(this.tableDate.has(order.user.id)){
          this.temp.cost = order.totalCost.valueOf() + this.tableDate.get(order.user.id).cost;
          if(order.date > this.tableDate.get(order.user.id).timeStart)
            this.temp.timeStart = this.tableDate.get(order.user.id).timeStart;
          else
          this.temp.timeStart = order.date;
          if(this.tableDate.get(order.user.id).timeFinish){
            if(order.date < this.tableDate.get(order.user.id).timeFinish)
              this.temp.timeFinish = this.tableDate.get(order.user.id).timeFinish;
            else
              this.temp.timeFinish = order.date;
          }
          else 
            this.temp.timeFinish = order.date;
        }
        else {
          this.temp.cost = order.totalCost.valueOf();
          this.temp.timeStart = order.date;
        }
        this.tableDate.set(order.user.id, this.temp);
        this.temp =  {user: null, cost: 0, timeStart: null, timeFinish: null};
      });
      this.table = Array.from(this.tableDate.values());
    })
  }

  paidOrderUser(userName: String){
    this.orderService.paidOrderUser(userName).subscribe(data => {
      this.getAllOrderNotPaid();
    });
  }

}
