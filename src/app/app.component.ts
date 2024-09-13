import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileButtonComponent } from './profile-button/profile-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elevated-tech-ng';
}
