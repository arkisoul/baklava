import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Career } from '../shared/models/career';

import { CareerService } from '../shared/services/career.service';

@Component({
    selector: 'app-career-detail',
    templateUrl: './career-detail.component.html',
    styleUrls: ['./career-detail.component.css']
})
export class CareerDetailComponent implements OnInit {
    career: Career;

    constructor(
        private careerService: CareerService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        let id: number = +this.route.snapshot.params['id']
        this.career = this.careerService.getCareer(id)
    }

}
