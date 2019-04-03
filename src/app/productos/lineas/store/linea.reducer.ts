import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { LineaActions, LineaActionTypes } from './linea.actions';

import { Linea } from 'src/app/sx-common/models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends EntityState<Linea> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Linea> = createEntityAdapter<Linea>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false
});

export function reducer(state = initialState, action: LineaActions): State {
  switch (action.type) {
    case LineaActionTypes.LoadLineas: {
      return {
        ...state,
        loading: true
      };
    }

    case LineaActionTypes.LoadLineasFail: {
      return {
        ...state,
        loading: false
      };
    }

    case LineaActionTypes.LoadLineasSuccess: {
      return adapter.addAll(action.payload.lineas, {
        ...state,
        loaded: true,
        loading: false
      });
    }

    case LineaActionTypes.AddLinea: {
      return adapter.addOne(action.payload.linea, state);
    }

    case LineaActionTypes.UpsertLinea: {
      return adapter.upsertOne(action.payload.linea, state);
    }

    case LineaActionTypes.AddLineas: {
      return adapter.addMany(action.payload.lineas, state);
    }

    case LineaActionTypes.UpsertLineas: {
      return adapter.upsertMany(action.payload.lineas, state);
    }

    case LineaActionTypes.UpdateLinea: {
      return adapter.updateOne(action.payload.linea, state);
    }

    case LineaActionTypes.UpdateLineas: {
      return adapter.updateMany(action.payload.lineas, state);
    }

    case LineaActionTypes.DeleteLinea: {
      return adapter.removeOne(action.payload.id, state);
    }

    case LineaActionTypes.DeleteLineas: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case LineaActionTypes.ClearLineas: {
      return adapter.removeAll({ ...state, loaded: false });
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getState = createFeatureSelector<State>('lineas');

export const getLineasLoading = createSelector(
  getState,
  state => state.loading
);

export const getLineasLoaded = createSelector(
  getState,
  state => state.loaded
);
