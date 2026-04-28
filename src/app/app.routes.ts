import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
    ],
    // canActivate:[authGuard]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./features/auth/auth.routes').then((feature) => feature.routes),
  },
  {
    path: 'calendar',
    loadComponent: () =>
      import('./features/schedule-calendar/schedule-calendar.component').then(
        (c) => c.ScheduleCalendarComponent,
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];
