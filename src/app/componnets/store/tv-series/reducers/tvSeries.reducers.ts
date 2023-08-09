import {popularTvSeriesReducer, PopularTvSeriesState} from "./popular-tvSeries.reducers";
import {onTheAirTvSeriesReducer, OnTheAirTvSeriesState} from "./onTheAir-TvSeries.reducers";
import {airingTodayTvSeriesReducer, AiringTodayTvSeriesState} from "./AiringToday-TvSeries.reducers";
import {combineReducers} from "@ngrx/store";
import {topRatedTvSeriesReducer, TopRatedTvSeriesState} from "./topRated-tvSeries.reducers";

export interface TvSeriesState {
  popularTvSeries: PopularTvSeriesState,
  onTheAirTvSeries: OnTheAirTvSeriesState,
  AiringTodayTvSeries: AiringTodayTvSeriesState,
  topRatedTvSeries: TopRatedTvSeriesState
}

export const tvSeriesKeyFeature = 'tvSeries';

export const tvSeriesReducer = combineReducers({
  popularTvSeries: popularTvSeriesReducer,
  onTheAirTvSeries: onTheAirTvSeriesReducer,
  AiringTodayTvSeries: airingTodayTvSeriesReducer,
  topRatedTvSeries: topRatedTvSeriesReducer
})
