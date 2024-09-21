// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);
  darkTheme$ = this.darkTheme.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      this.darkTheme.next(isDark);
      this.setTheme(isDark);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkTheme.next(prefersDark);
      this.setTheme(prefersDark);
    }
  }

  toggleTheme() {
    const isDark = !this.darkTheme.value;
    this.darkTheme.next(isDark);
    this.setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  private setTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
