import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-customer-session-form',
  templateUrl: './customer-session-form.component.html',
  styleUrls: ['./customer-session-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ]
})
export class CustomerSessionFormComponent {

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      licensePlate: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,}$')]],
      email: ['', Validators.email]
    });
  }

  // Getter methods for form controls
  get name(): AbstractControl {
    return this.customerForm.get('name')!;
  }

  get licensePlate(): AbstractControl {
    return this.customerForm.get('licensePlate')!;
  }

  get phoneNumber(): AbstractControl {
    return this.customerForm.get('phoneNumber')!;
  }

  get email(): AbstractControl {
    return this.customerForm.get('email')!;
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
