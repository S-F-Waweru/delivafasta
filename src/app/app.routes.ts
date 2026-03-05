import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Homepage } from './pages/homepage/homepage';
import { AboutPage } from './pages/about-page/about-page';
import { ContactUs } from './pages/contact-us/contact-us';

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
      {
        path: 'about',
        component: AboutPage,
      },
      {
        path: 'contact-us',
        component: ContactUs,
      },
    ],
  },
];
