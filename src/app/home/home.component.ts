import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    $: any = jQuery;

    constructor() { }

    ngOnInit() {
        this.$('.slider').slider();
    }

}
