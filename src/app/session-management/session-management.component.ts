import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ValetService } from '@app/services/valet.service';
import { Subscription } from 'rxjs';

import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-management',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './session-management.component.html',
  styleUrl: './session-management.component.scss'
})
export class SessionManagementComponent {
  readonly valetService = inject(ValetService)
  registerForm: FormGroup;  
  registrationSuccessful: boolean
  passwordsMatch: boolean;
  subscriptions: Subscription[] = []; 
  constructor(private fb: FormBuilder) {
    this.passwordsMatch = false;
    this.registrationSuccessful = false;
    this.registerForm = this.fb.group({
      'keycode': new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.maxLength(40)
      ]),
      'description': new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.maxLength(40)
      ]),
      'phone': new FormControl('', [Validators.required,
        Validators.pattern("^[0-9]{10}$"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]), 
      'locations': new FormControl('', [Validators.required]),      
    });    
  }
  
  get phone() {
    return this.registerForm.get('phone');
  }

  get keycode() {
    return this.registerForm.get('keycode');
  }

  get description() {
    return this.registerForm.get('description');
  }

  get locations() {
    return this.registerForm.get('locations');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11, por eso se suma 1
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      let body = {
       "description": this.description?.value,
        "keycode": this.keycode?.value,
        "phone": this.phone?.value,
        "user_id": "96972117-399d-4d8a-aa0e-16892eb149cf",
        "location_id": "07bbe24e-78ed-4712-a2b3-40b941666788",
        "lastmodifiedby": "96972117-399d-4d8a-aa0e-16892eb149cf",
        "starttime": formattedDate,
        "state": "active",
        "status": "in progress",
      }
      this.valetService.createSession(body).subscribe(
        {
          next(reponse) {
              console.log(reponse);
          },
          error(err) {
              console.error('something wrong occurred: ' + err);
          },
          complete() {
              console.log('done');
          },
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());    
  }

}
