import { Component } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [Drawer, Button, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  visible: boolean = false;
}
