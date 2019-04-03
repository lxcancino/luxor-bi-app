import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Linea } from 'src/app/sx-common/models';

export enum LineaActionTypes {
  LoadLineas = '[Linea] Load Lineas',
  LoadLineasFail = '[Linea] Load Lineas Fail',
  LoadLineasSuccess = '[Linea] Load Lineas Success',
  AddLinea = '[Linea] Add Linea',
  UpsertLinea = '[Linea] Upsert Linea',
  AddLineas = '[Linea] Add Lineas',
  UpsertLineas = '[Linea] Upsert Lineas',
  UpdateLinea = '[Linea] Update Linea',
  UpdateLineas = '[Linea] Update Lineas',
  DeleteLinea = '[Linea] Delete Linea',
  DeleteLineas = '[Linea] Delete Lineas',
  ClearLineas = '[Linea] Clear Lineas'
}

export class LoadLineas implements Action {
  readonly type = LineaActionTypes.LoadLineas;
}
export class LoadLineasFail implements Action {
  readonly type = LineaActionTypes.LoadLineasFail;

  constructor(public payload: { response: any }) {}
}
export class LoadLineasSuccess implements Action {
  readonly type = LineaActionTypes.LoadLineasSuccess;

  constructor(public payload: { lineas: Linea[] }) {}
}

export class AddLinea implements Action {
  readonly type = LineaActionTypes.AddLinea;

  constructor(public payload: { linea: Linea }) {}
}

export class UpsertLinea implements Action {
  readonly type = LineaActionTypes.UpsertLinea;

  constructor(public payload: { linea: Linea }) {}
}

export class AddLineas implements Action {
  readonly type = LineaActionTypes.AddLineas;

  constructor(public payload: { lineas: Linea[] }) {}
}

export class UpsertLineas implements Action {
  readonly type = LineaActionTypes.UpsertLineas;

  constructor(public payload: { lineas: Linea[] }) {}
}

export class UpdateLinea implements Action {
  readonly type = LineaActionTypes.UpdateLinea;

  constructor(public payload: { linea: Update<Linea> }) {}
}

export class UpdateLineas implements Action {
  readonly type = LineaActionTypes.UpdateLineas;

  constructor(public payload: { lineas: Update<Linea>[] }) {}
}

export class DeleteLinea implements Action {
  readonly type = LineaActionTypes.DeleteLinea;

  constructor(public payload: { id: string }) {}
}

export class DeleteLineas implements Action {
  readonly type = LineaActionTypes.DeleteLineas;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearLineas implements Action {
  readonly type = LineaActionTypes.ClearLineas;
}

export type LineaActions =
  | LoadLineas
  | LoadLineasFail
  | LoadLineasSuccess
  | AddLinea
  | UpsertLinea
  | AddLineas
  | UpsertLineas
  | UpdateLinea
  | UpdateLineas
  | DeleteLinea
  | DeleteLineas
  | ClearLineas;
