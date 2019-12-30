import { Menu } from './menu';
import { User } from './user';

export class Order {
    id: Number;
    date: Date;
    totalCost: Number;
    paid: boolean;
    menu: Menu;
    user: User;
    constructor(){}
}