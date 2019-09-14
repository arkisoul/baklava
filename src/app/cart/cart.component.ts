import { Component, OnInit } from '@angular/core';

import { InputNumberService } from '../shared/services/input-number.service';
import { CartService } from '../shared/services/cart.service';

import { Cart } from '../shared/models/cart';

declare let jQuery: any;
declare let $: any;

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cart: Cart[] = [];
    cartTotal: number = 0;

    constructor(
        private inputNumberService: InputNumberService,
        private cartService: CartService
    ) { }

    ngOnInit() {
        this.cart = this.cartService.getCart(1);
        this.cart.map((item: Cart) => {
            this.cartTotal += item.price * item.quantity;
        });
    }

    onClick(eventData: any): void {
        this.inputNumberService.btnClick(eventData.target.parentElement);
    }

    onFocusIn(eventData: any): void {
        let name = eventData.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        this.inputNumberService.inpFocusIn(input, eventData.target);
    }

    onKeyDown(eventData: any): void {
        let name = eventData.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        this.inputNumberService.inpKeyDown(input);
    }

    onChange(eventData: any): void {
        let name = eventData.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        this.inputNumberService.inpChange(input, eventData.target);
    }

    onTotalChange(eventData: any): void {
        let name = eventData.target.getAttribute('name');
        let input = $('input[name="'+name+'"]');
        let change = parseInt(input.val());
        this.cartTotal += change;
    }

}
