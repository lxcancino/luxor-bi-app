import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';

import { Linea } from 'src/app/sx-common/models';

@Injectable({
  providedIn: 'root'
})
export class LineasService {
  private _apiUrl: string;

  constructor(private http: HttpClient) {}

  list(): Observable<Linea[]> {
    const params = new HttpParams();
    return this.http
      .get<Linea[]>(this.apiUrl, { params: params })
      .pipe(catchError((response: any) => throwError(response)));
  }

  get(lineaId: string): Observable<Linea> {
    return this.list().pipe(
      switchMap(lineas => lineas.find(item => item.id === lineaId)[0])
    );
  }

  get apiUrl() {
    if (!this._apiUrl) {
      // this._apiUrl = `${environment.apiUrl}/lineas`;
      this._apiUrl = 'assets/data/lineas2.json';
      console.log('API: ', this._apiUrl);
    }
    return this._apiUrl;
  }
}
