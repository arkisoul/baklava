import { Injectable } from '@angular/core';

import { Cart } from '../models/cart';
import { CART } from '../data/cart';

@Injectable()
export class CartService {

    constructor() { }

    getCart(id: number): Cart[] {
        return CART.filter((cart: Cart) => cart.userId == id);
    }

}
