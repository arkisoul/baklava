import { Injectable } from '@angular/core';

import { Career } from '../models/career';
import { CareerCategory } from '../models/career-category';
import { Careers } from '../data/careers';
import { CareerCategories } from '../data/career-categories';

@Injectable()
export class CareerService {

    constructor() { }

    getCareerCategories(): CareerCategory[] {
        return CareerCategories;
    }

    getCareers(): Career[] {
        return Careers;
    }

    getCareer(id: number): Career {
        return Careers.filter((career: Career) => (career.id == id))[0];
    }

}
