import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getHttpOptions() {
    // const token = this.authService.getToken();
    // console.log('Token:', token);
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      }),
    };
  }

  // ========== Reusable API ==========
  public get<T>(path: string): Observable<T> {
    const url = `${this.baseUrl}/${path}`;
    return this.http.get<T>(url, this.getHttpOptions());
  }

  public getDetail<T>(path: string, id: string | number): Observable<T> {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this.http.get<T>(url, this.getHttpOptions());
  }

  public post<T>(path: string, data: unknown): Observable<T> {
    const url = `${this.baseUrl}/${path}`;
    return this.http.post<T>(url, data, this.getHttpOptions());
  }

  public put<T>(
    path: string,
    id: string | number,
    data: unknown,
  ): Observable<T> {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this.http.put<T>(url, data, this.getHttpOptions());
  }

  public patch<T>(
    path: string,
    id: string | number,
    data: unknown,
  ): Observable<T> {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this.http.patch<T>(url, data, this.getHttpOptions());
  }

  public delete<T>(path: string, id: string | number): Observable<T> {
    const url = `${this.baseUrl}/${path}/${id}`;
    return this.http.delete<T>(url, this.getHttpOptions());
  }
}
