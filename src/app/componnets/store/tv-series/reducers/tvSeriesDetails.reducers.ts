import {ITvSeriesDetails} from "../../../models/tvSeries-details.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {TvSeriesDetailsActions} from "../actions/tv-series.actions";

export interface TvSeriesDetailsState {
  tvSeriesDetails?: ITvSeriesDetails,
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: TvSeriesDetailsState = {
  tvSeriesDetails: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const tvSeriesDetailsReducer = createReducer(
  initialState,
  on(TvSeriesDetailsActions.loadTvSeriesDetails, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(TvSeriesDetailsActions.loadTvSeriesDetailsSuccess,(state, action) => ({
    ...state,
    loading: false,
    success: true,
    tvSeriesDetails: action.payload
  })),
  on(TvSeriesDetailsActions.loadTvSeriesDetailsFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
