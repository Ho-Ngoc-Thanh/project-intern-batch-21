import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authToken = localStorage.getItem('accessToken');

  if (!authToken) {
    return next(req);
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      // 'X-User-Timezone': timezone
    },
  });

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      const isRefresh = req.url.includes('auth/refresh');
      const isLogin = req.url.includes('auth/login');

      if (error.status === 401 && !isRefresh && !isLogin) {
        return authService.refreshToken().pipe(
          switchMap(() => {
            const newToken = localStorage.getItem('accessToken');

            const retryReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${newToken}`,
              },
            });

            return next(retryReq);
          }),
          catchError(() => {
            localStorage.clear();
            router.navigate(['/login']);
            return throwError(() => error);
          }),
        );
      }
      return throwError(() => error);
    }),
  );
};
