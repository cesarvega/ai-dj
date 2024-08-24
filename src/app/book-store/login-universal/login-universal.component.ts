import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AiService } from '../services/ai.service';
import { Subscription } from 'rxjs';
import { AiStore } from '@app/store/ai.store';


@Component({
  selector: 'app-login-universal',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  templateUrl: './login-universal.component.html',
  styleUrl: './login-universal.component.scss'
})
export class LoginUniversalComponent {
  readonly aiStore = inject(AiStore)
  readonly aiService = inject(AiService)
  appsTitle = 'AI Books'; // Set your app title here
  // add input 
  // username: string = 'tech_guru_99';
  // password: string = 'P@ssw0rd!23';
  // username: string = 'cesarvega.col@gmail.com';
  // password: string = 'evt_1PiyfiIGoSU0Z9WxG9PG3ibC';
  username: string = '';
  password: string = '';
  subscriptions: Subscription[] = [];
  constructor(private router: Router) { }

  onSubmit() {
    let body = {
      username : this.username,
      password: this.password
    }
    const loginSubscribe = this.aiService.checkCredentials(body).subscribe({
      next: (response: any) => {
        if (response.username === this.username) {
          // localStorage.setItem('user', JSON.stringify(response));
          this.aiStore.updateUserLogued(response);
          this.router.navigate(['/study']);
        } else {
          alert('Invalid username or password');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
    this.subscriptions.push(loginSubscribe);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());    
  }
}
