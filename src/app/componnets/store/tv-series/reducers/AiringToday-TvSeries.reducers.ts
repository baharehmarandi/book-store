import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {AiringTodayTvSeriesAction} from "../actions/tv-series.actions";

export interface AiringTodayTvSeriesState {
  airingTodayTvSeries?: ITvSeriesResult[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  total?: number,
}

export const initialState: AiringTodayTvSeriesState = {
  airingTodayTvSeries: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  total: undefined,
}

export const airingTodayTvSeriesReducer = createReducer(
  initialState,
  on(AiringTodayTvSeriesAction.loadAiringTodayTvSeries, (state) => ({
    ...state,
    loading: true
  })),
  on(AiringTodayTvSeriesAction.loadAiringTodayTvSeriesSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    airingTodayTvSeries: action.payload,
    total: action.total
  })),
  on(AiringTodayTvSeriesAction.loadAiringTodayTvSeriesFailure,(state, action) =>({
    ...state,
    loading: false,
    error: action.error
  }))
)
