import { Injectable } from '@angular/core';

import { Dish } from '../models/dish';
import { DISHES } from '../data/dishes';

@Injectable()
export class DishService {

    constructor() { }

    getDishes():Dish[] {
        return DISHES;
    }

}
