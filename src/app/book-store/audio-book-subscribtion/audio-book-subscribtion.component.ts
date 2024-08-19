import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-audio-book-subscribtion',
  standalone: true,
  imports: [    
  ],
  templateUrl: './audio-book-subscribtion.component.html',
  styleUrl: './audio-book-subscribtion.component.scss'
})
export class AudioBookSubscribtionComponent {
  registerForm: FormGroup;
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
