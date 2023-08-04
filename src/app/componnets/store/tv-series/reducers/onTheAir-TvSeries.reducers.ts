import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {OnTheAirTvSeriesAction} from "../actions/tv-series.actions";

export interface OnTheAirTvSeriesState {
  onTheAirTvSeries?: ITvSeriesResult[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: OnTheAirTvSeriesState = {
  onTheAirTvSeries: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const onTheAirTvSeriesReducer = createReducer(
  initialState,
  on(OnTheAirTvSeriesAction.loadOnTheAirTvSeries, (state) => ({
    ...state,
    loading: true
  })),
  on(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesSuccess,(state, acttion) => ({
    ...state,
    loading: false,
    success: true,
    onTheAirTvSeries: acttion.payload
  })),
  on(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
)
