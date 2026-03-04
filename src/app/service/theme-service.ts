import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ThemeService {
  private isDarkMode = signal(false);

  constructor() {
    this.initTheme()
  }


  initTheme(): void {
    const savedTheme = localStorage.getItem('theme')

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode.set(savedTheme ? savedTheme === 'dark' : prefersDark)

    this.applyTheme()
  }

  toggleDarkMode(): void {
    this.isDarkMode.set(!this.isDarkMode());
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }


  get isDark(){
    return this.isDarkMode;
  }
}
