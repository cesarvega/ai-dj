import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-management',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './session-management.component.html',
  styleUrl: './session-management.component.scss'
})
export class SessionManagementComponent implements OnInit {
  customerForm!: FormGroup;
  constructor(private fb: FormBuilder){
    
  }
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      description: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]+$')]], // Solo dígitos y mínimo 10
    });
  }

  get name() {
    return this.customerForm.get('name');
  }

  get licensePlate() {
    return this.customerForm.get('licensePlate');
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get email() {
    return this.customerForm.get('email');
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      console.log('Formulario válido:', this.customerForm.value);
      // Puedes hacer el envío de datos o procesamiento aquí
    } else {
      console.log('Formulario no válido');
    }
  }

}
