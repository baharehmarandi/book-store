import {ITvSeriesSeasons} from "../../../models/tvSeriesSeasons.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {TvSeriesSeasonActions} from "../actions/tv-series.actions";
import {ITvSeriesSeasonEpisode} from "../../../models/tvSeriesSeasonEpisods.model";

export interface TvSeriesSeasonState {
  tvSeriesSeason?: ITvSeriesSeasons,
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse,
  tvSeriesSeasonEpisodes?: TvSeriesSeasonEpisodes[]
}

export interface TvSeriesSeasonEpisodes {
  seasonNumber?: number,
  episodeCount?: number,
  episodes?: ITvSeriesSeasonEpisode[]
}

export const initialState: TvSeriesSeasonState = {
  tvSeriesSeason: undefined,
  loading: undefined,
  success: undefined,
  error: undefined,
  tvSeriesSeasonEpisodes: []
}

export const tvSeriesSeasonReducer = createReducer(
  initialState,
  on(TvSeriesSeasonActions.loadTvSeriesSeason, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(TvSeriesSeasonActions.loadTvSeriesSeasonSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    tvSeriesSeason: action.payload
  })),
  on(TvSeriesSeasonActions.loadTvSeriesSeasonFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
