import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    slides: Array<any> = []

    constructor() { }

    ngOnInit() {
        this.slides = [
            { image: '/assets/images/home-slide1.jpg', caption: 'Super Fresh Super Cakes', subcaption: 'Here\'s our small slogan.' },
            { image: '/assets/images/home-slide2.jpg', caption: 'Super Fresh Super Cakes', subcaption: 'Here\'s our small slogan.' },
            { image: '/assets/images/home-slide3.jpg', caption: 'Super Fresh Super Cakes', subcaption: 'Here\'s our small slogan.' },
            { image: '/assets/images/home-slide2.jpg', caption: 'Super Fresh Super Cakes', subcaption: 'Here\'s our small slogan.' },
            { image: '/assets/images/home-slide1.jpg', caption: 'Super Fresh Super Cakes', subcaption: 'Here\'s our small slogan.' }
        ]
    }

}
