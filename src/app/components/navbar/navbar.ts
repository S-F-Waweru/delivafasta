import { Component, computed, HostListener } from '@angular/core';
import { Button } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { ThemeService } from '../../service/theme-service';

@Component({
  selector: 'navbar',
  imports: [Button, Button, RouterLink, RouterLinkActive, Sidebar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Change state after 50px of scrolling
    this.isScrolled = window.scrollY > 50;
  }
  isDarkMode;

  constructor(public themeService: ThemeService) {
    this.isDarkMode = computed(() => this.themeService.isDark());
    console.log(this.isDarkMode);
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
