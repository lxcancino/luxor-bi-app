import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Linea } from 'src/app/sx-common/models';

@Injectable({
  providedIn: 'root'
})
export class LineasService {
  private _apiUrl: string;

  constructor(private http: HttpClient) {}
  // list(filter: EjercicioMes): Observable<SaldoPorCuentaContable[]> {
  list(filter: {} = { max: 100 }): Observable<Linea[]> {
    const params = new HttpParams();
    return this.http
      .get<Linea[]>(this.apiUrl, { params: params })
      .pipe(catchError((response: any) => throwError(response)));
  }

  get apiUrl() {
    if (!this._apiUrl) {
      // this._apiUrl = `${environment.apiUrl}/lineas`;
      this._apiUrl = 'assets/data/lineas.json';
      console.log('API: ', this._apiUrl);
    }
    return this._apiUrl;
  }
}
