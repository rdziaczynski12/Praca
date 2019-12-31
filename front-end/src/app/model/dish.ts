import { TypeDish } from './typeDish';
import { Restaurant } from './restaurant';

export class Dish {
    id: Number;
    name: String;
    price: Number;
    description: String;
    active: boolean;
    types: TypeDish [];
    restaurant: Restaurant;
    constructor(){}
}