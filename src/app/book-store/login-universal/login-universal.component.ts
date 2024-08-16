import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/book-store/services/auth.service';
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
  appsTitle = 'AI Books'; // Set your app title here
  // add input 
  // username: string = 'tech_guru_99';
  // password: string = 'P@ssw0rd!23';
  // username: string = 'cesarvega.col@gmail.com';
  // password: string = 'evt_1PiyfiIGoSU0Z9WxG9PG3ibC';
  username: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.checkCredentials(this.username, this.password).subscribe({
      next: (response) => {
        if (response.username === this.username) {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/study']);
        } else {
          alert('Invalid username or password');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}
