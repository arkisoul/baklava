import { Component, OnInit } from '@angular/core';

declare let jQuery: any;

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

    $: any = jQuery;

    constructor() { }

    ngOnInit() {
        this.$('#bkh-cnew-openpos-tabs').tabs();
    }

}
