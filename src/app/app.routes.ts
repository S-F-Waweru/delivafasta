import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Homepage } from './pages/homepage/homepage';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Homepage,
      },
    ],
  },
];
