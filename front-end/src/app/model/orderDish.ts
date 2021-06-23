import { Order } from './order';
import { Dish } from './Dish';

export class OrderDish {
    id: Number;
    quantity: Number;
    order: Order;
    dish: Dish;
    constructor(){}
}