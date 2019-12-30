import { TypeDish } from './typeDish';
import { Restaurant } from './restaurant';

export class Dish {
    id: Number;
    price: number
    description: String;
    active: boolean;
    types: TypeDish [];
    restaurant: Restaurant;
    constructor(){}
}