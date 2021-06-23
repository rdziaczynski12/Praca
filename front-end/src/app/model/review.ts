import { User } from './user';
import { Dish } from './Dish';

export class Review {
    id: Number;
    rating: Number;
    description: String;
    date: Date;
    user: User;
    dish: Dish;
    constructor(){}
}