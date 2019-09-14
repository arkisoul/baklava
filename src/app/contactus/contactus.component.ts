import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback } from '../shared/models/feedback';

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
    feedbackForm: FormGroup;
    feedback: Feedback;
    submittedFeedback: Feedback;
    formErrors: any = {
        'name': '',
        'email': '',
        'message': '',
    }

    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 2 characters long.',
            'maxlength': 'Name cannot be more than 25 characters long.'
        },
        'email': {
            'required': 'Email is required.',
            'email': 'Email not in valid format.'
        },
        'message': {
            'required': 'Message is required.'
        }
    }

    constructor(
        private fb: FormBuilder
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm(): void {
        this.feedbackForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required]]
        });

        this.feedbackForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // re(set) validation messages now
    }

    onValueChanged(data?: any) {
        if (!this.feedbackForm) {
            return;
        }
        const form = this.feedbackForm;
        for (const field in this.formErrors) {
            // Clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && control.invalid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    onSubmit(): void {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            name: '',
            email: '',
            message: ''
        });
    }

}
