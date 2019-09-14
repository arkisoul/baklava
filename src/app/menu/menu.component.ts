import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/models/dish';
import { DishService } from '../shared/services/dish.service';
import { InputNumberService } from '../shared/services/input-number.service';

declare let jQuery: any;
declare let $: any;

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    dishes: Dish[] = [];

    constructor(
        private dishService: DishService,
        private inputNumberService: InputNumberService
    ) { }

    ngOnInit() {
        this.dishes = this.dishService.getDishes();
    }

    onClick(event: any): void {
        this.inputNumberService.btnClick(event.target.parentElement);
    }

    onChange(event: any): void {
        let name = event.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        this.inputNumberService.inpChange(input, event.target);
    }

    onFocusIn(event: any): void {
        let name = event.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        this.inputNumberService.inpFocusIn(input, event.target);
    }

    onKeyDown(e: any): void {
        let name = e.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        this.inputNumberService.inpKeyDown(input);
    }
}
