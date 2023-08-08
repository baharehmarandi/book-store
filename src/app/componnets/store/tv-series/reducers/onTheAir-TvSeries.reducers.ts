import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {OnTheAirTvSeriesAction} from "../actions/tv-series.actions";

export interface OnTheAirTvSeriesState {
  onTheAirTvSeries?: ITvSeriesResult[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

export const initialState: OnTheAirTvSeriesState = {
  onTheAirTvSeries: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const onTheAirTvSeriesReducer = createReducer(
  initialState,
  on(OnTheAirTvSeriesAction.loadOnTheAirTvSeries, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesSuccess,(state, action) => ({
    ...state,
    loading: false,
    success: true,
    onTheAirTvSeries: action.payload,
    total: action.total
  })),
  on(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
)
