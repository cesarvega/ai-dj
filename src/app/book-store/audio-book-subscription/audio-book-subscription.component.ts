import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-audio-book-subscribtion',
  standalone: true,
  imports: [    
  ],
  templateUrl: './audio-book-subscription.component.html',
  styleUrl: './audio-book-subscription.component.scss'
})
export class AudioBookSubscribtionComponent {
  registerForm: FormGroup;
  readonly subscriptionService = inject(SubscriptionService)
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
    }
  }

}
