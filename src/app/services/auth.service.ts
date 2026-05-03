import { LoginData } from './../models/interfaces/login-data.interface';
import { ApiResponse } from './../models/interfaces/api-response.interface';
import { LoginRequest } from './../models/interfaces/login-request.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService) {}

  login(data: LoginRequest) {
    return this.api.post<ApiResponse<LoginData>>('auth/login', data).pipe(
      tap((res) => {
        // console.log('data login: ', res.data);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('fullName', res.data.fullName);
      }),
    );
  }

  logout() {
    return this.api.post<any>('auth/logout', {});
  }

  refreshToken(): Observable<ApiResponse<LoginData>> {
    const refreshToken = localStorage.getItem('refreshToken') || '';

    return this.api
      .post<ApiResponse<LoginData>>(`auth/refresh`, {
        refreshToken,
      })
      .pipe(
        tap((res) => {
          console.log('data login: ', res.data);
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('fullName', res.data.fullName);
        }),
      );
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
