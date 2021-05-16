import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });

  isFormSent: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get name(): AbstractControl {
    return this.contactForm.get('name');
  }
  get email(): AbstractControl {
    return this.contactForm.get('email');
  }
  get subject(): AbstractControl {
    return this.contactForm.get('subject');
  }
  get message(): AbstractControl {
    return this.contactForm.get('message');
  }

  onSubmit(): void {
    this.http
      .get(`https://api.trumail.io/v2/lookups/json?email=${this.email.value}`)
      .subscribe((validation: any) => {
        if (validation.validFormat) {
          this.contactForm.reset();
          this.isFormSent = true;
        } else {
          this.email.setErrors({ email: 'Invalid format' });
        }
      });
  }
}
