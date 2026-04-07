import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected baseUrl = '';

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

  // ========== Hàm tái sử dụng ==========
  // ========== Reusable API ==========
  private getList<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get<T>(url, this.getHttpOptions());
  }

  private getDetail<T>(endpoint: string, id: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.get<T>(url, this.getHttpOptions());
  }

  private create<T>(endpoint: string, data: unknown): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post<T>(url, data, this.getHttpOptions());
  }

  private update<T>(
    endpoint: string,
    id: string,
    data: unknown,
  ): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.put<T>(url, data, this.getHttpOptions());
  }

  private partialUpdate<T>(
    endpoint: string,
    id: string,
    data: unknown,
  ): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.patch<T>(url, data, this.getHttpOptions());
  }

  private remove<T>(endpoint: string, id: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.delete<T>(url, this.getHttpOptions());
  }

  private restore<T>(endpoint: string, id: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}/${id}`;
    return this.http.post<T>(url, null, this.getHttpOptions());
  }
}
