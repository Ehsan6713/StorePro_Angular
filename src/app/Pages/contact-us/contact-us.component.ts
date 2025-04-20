import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactUsDto } from '../../Dtos/contact-us.dto';
import { ContactUsService } from '../../Services/contact-us.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ValiddationComponent } from "../../Components/validdation/validdation.component";

// Define your custom error interface
interface CustomValidationError {
  propertyName: string;
  errorMessage: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValiddationComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactUsModel: ContactUsDto = {
    Name: '',
    Email: '',
    Message: '',
    Phone: ''
  };

  constructor(
    private contactUsService: ContactUsService,
    private toaster: ToastrService,
    private router:Router
  ) {}
contactUSFormGroup:FormGroup<any>=new FormGroup(
  {
    name:new FormControl(this.contactUsModel.Name,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(this.contactUsModel.Email,[Validators.required]),
    message:new FormControl(this.contactUsModel.Message,[Validators.required]),
    phone:new FormControl(this.contactUsModel.Phone,[Validators.required])

  });
  onCreateContactUs() {
   
    this.contactUsService.create(this.contactUsModel).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.toaster.success("عملیات ب موفقیت انجام شد");
         setTimeout(() => {
          this.router.navigate(['home'])
         }, 1000);
        } else {
          if (response.errors) {
            this.handleErrors(response.errors);
          }
          this.toaster.error(response.message);
        }
      },
      error: (err) => {
        this.toaster.error('An unexpected error occurred. Please try again.');
        console.error('HTTP Error:', err);
      }
    });
  }

  private handleErrors(errors: CustomValidationError[] | CustomValidationError) {
    if (Array.isArray(errors)) {
      errors.forEach((error: CustomValidationError) => {
        this.toaster.error(error.errorMessage);
      });
    } else if (errors) {
      this.toaster.error((errors as CustomValidationError).errorMessage);
    }
  }
}