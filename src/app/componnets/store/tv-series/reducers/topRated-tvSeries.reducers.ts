import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {TopRatedTvSeriesAction} from "../actions/tv-series.actions";

export interface TopRatedTvSeriesState {
  topRatedTvSeries?: ITvSeriesResult[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number
}

export const initialState: TopRatedTvSeriesState = {
  topRatedTvSeries: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined
}

export const topRatedTvSeriesReducer = createReducer(
  initialState,
  on(TopRatedTvSeriesAction.loadTopRatedTvSeries,(state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(TopRatedTvSeriesAction.loadTopRatedTvSeriesSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    topRatedTvSeries: action.payload,
    total: action.total
  })),
  on(TopRatedTvSeriesAction.loadTopRatedTvSeriesFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
