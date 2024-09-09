import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AiService } from '../services/ai.service';
import { Subscription } from 'rxjs';
import { SupabaseService } from '@app/services/supabase.service';

@Component({
  selector: 'app-audio-book-subscribtion',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './audio-book-subscription.component.html',
  styleUrl: './audio-book-subscription.component.scss'
})
export class AudioBookSubscribtionComponent {
  readonly aiService = inject(AiService)
  registerForm: FormGroup;  
  passwordsMatch: boolean;
  subscriptions: Subscription[] = []; 
  constructor(private fb: FormBuilder, private supabaseService:SupabaseService) {
    this.passwordsMatch = false;
    this.registerForm = this.fb.group({
      'full-name': new FormControl('', [
        Validators.required, Validators.minLength(2), Validators.maxLength(40)
      ]),      
      'email': new FormControl('', [
        Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      'phone': new FormControl('', [Validators.required,
      Validators.pattern("^[0-9]{10}$"),
      Validators.minLength(10),
      Validators.maxLength(10)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      'confirm-password': new FormControl('', [Validators.required]),
    },{ validators: this.confirmPassword });    
  }

  confirmPassword(control: AbstractControl): ValidationErrors | null{
    const password1 = control.get('password');
    const password2 = control.get('confirm-password');
  
    return password1 && password2 && password1.value === password2.value
      ? null
      : {passwordsMatch: false};
  }
  get password() {
    return this.registerForm.get('password');
  }

  get confirmpassword() {
    return this.registerForm.get('confirm-password');
  }
  get email() {
    return this.registerForm.get('email');
  }

  get fullName() {
    return this.registerForm.get('full-name');
  }
  get phone() {
    return this.registerForm.get('phone');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      let body = {
       "username": this.fullName?.value,
        "password": this.password?.value,
       // "fullName": this.fullName?.value,
        "email": this.email?.value,
        "phone": this.phone?.value
      }
       this.supabaseService.SubscribeUser(body)
      // const subscription =  this.aiService.subscribeUser(body).subscribe({
      //   next: value => console.log(value),
      //   error: err => console.error(err.error.message),
      //   complete: () => console.log('Observable emitted the complete notification')        
      // })
      // this.subscriptions.push(subscription);      
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());    
  }

}
