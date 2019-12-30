import { Dish } from './Dish';
import { DatePipe } from '@angular/common';

export class Menu {
    id: Number;
    startDate: Date;
    finishDate: Date;
    deliveryTime: Date;
    dishes: Dish [];
    active: boolean;
    constructor(){}
}