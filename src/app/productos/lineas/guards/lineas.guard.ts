import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap, tap, filter, take, catchError } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable({ providedIn: 'root' })
export class LineasGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.getLineasLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadLineas());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
