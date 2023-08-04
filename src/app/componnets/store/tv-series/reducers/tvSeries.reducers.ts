import {popularTvSeriesReducer, PopularTvSeriesState} from "./popular-tvSeries.reducers";
import {onTheAirTvSeriesReducer, OnTheAirTvSeriesState} from "./onTheAir-TvSeries.reducers";
import {airingTodayTvSeriesReducer, AiringTodayTvSeriesState} from "./AiringToday-TvSeries.reducers";
import {combineReducers} from "@ngrx/store";

export interface TvSeriesState {
  popularTvSeries: PopularTvSeriesState,
  onTheAirTvSeries: OnTheAirTvSeriesState,
  AiringTodayTvSeries: AiringTodayTvSeriesState
}

export const tvSeriesKeyFeature = 'tvSeries';

export const tvSeriesReducer = combineReducers({
  popularTvSeries: popularTvSeriesReducer,
  onTheAirTvSeries: onTheAirTvSeriesReducer,
  AiringTodayTvSeries: airingTodayTvSeriesReducer
})
