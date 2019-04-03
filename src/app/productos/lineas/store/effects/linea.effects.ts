import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import * as fromActions from '../linea.actions';
import { LineaActionTypes, LineaActions } from '../linea.actions';
import { LineasService } from 'src/app/productos/services/lineas.service';
import { of } from 'rxjs';

@Injectable()
export class LineaEffects {
  @Effect()
  load$ = this.actions$.pipe(
    ofType(LineaActionTypes.LoadLineas),
    switchMap(() =>
      this.service.list().pipe(
        map(lineas => new fromActions.LoadLineasSuccess({ lineas })),
        catchError(response => of(new fromActions.LoadLineasFail({ response })))
      )
    )
  );

  constructor(private actions$: Actions, private service: LineasService) {}
}
