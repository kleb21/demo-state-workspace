import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'contractors',
    loadChildren: () =>
      import('contractors/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'wageData',
    loadChildren: () => import('wageData/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'projects',
    loadChildren: () => import('projects/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];
