import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
  isDark: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDark = this.themeService.darkTheme$;
  }

  toggleTheme() { 
    this.themeService.toggleTheme();
  }
}