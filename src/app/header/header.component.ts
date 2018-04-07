import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    $: any = jQuery;

    constructor() { }

    ngOnInit() {
        this.$(".button-collapse").sideNav();
    }

}
