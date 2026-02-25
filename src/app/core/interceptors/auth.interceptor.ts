import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('accessToken');

  if (!authToken) {
    return next(req);
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      'X-User-Timezone': timezone
    }
  });

  return next(authReq);
};
