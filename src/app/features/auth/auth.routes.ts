import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { authGuard } from 'src/app/core/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
  },
];
