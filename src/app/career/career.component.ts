import { Component, OnInit } from '@angular/core';

import { Career } from '../shared/models/career';
import { CareerCategory } from '../shared/models/career-category';

import { CareerService } from '../shared/services/career.service';

@Component({
    selector: 'app-career',
    templateUrl: './career.component.html',
    styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
    careers: Career[] = [];
    careerCategories: CareerCategory[] = [];

    constructor(
        private careerService: CareerService) { }

    ngOnInit() {
        this.careers = this.careerService.getCareers();
        this.careerCategories = this.careerService.getCareerCategories();
    }
}
