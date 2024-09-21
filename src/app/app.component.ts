import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToggleThemeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'elevated-tech-ng';
}
