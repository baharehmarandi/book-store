import {popularTvSeriesReducer, PopularTvSeriesState} from "./popular-tvSeries.reducers";
import {onTheAirTvSeriesReducer, OnTheAirTvSeriesState} from "./onTheAir-TvSeries.reducers";
import {airingTodayTvSeriesReducer, AiringTodayTvSeriesState} from "./AiringToday-TvSeries.reducers";
import {combineReducers} from "@ngrx/store";
import {topRatedTvSeriesReducer, TopRatedTvSeriesState} from "./topRated-tvSeries.reducers";
import {tvSeriesDetailsReducer, TvSeriesDetailsState} from "./tvSeriesDetails.reducers";
import {tvSeriesSeasonReducer, TvSeriesSeasonState} from "./tvSeriesSeason.reducers";

export interface TvSeriesState {
  popularTvSeries: PopularTvSeriesState,
  onTheAirTvSeries: OnTheAirTvSeriesState,
  AiringTodayTvSeries: AiringTodayTvSeriesState,
  topRatedTvSeries: TopRatedTvSeriesState,
  tvSeriesDetails: TvSeriesDetailsState,
  tvSeriesSeasons: TvSeriesSeasonState
}

export const tvSeriesKeyFeature = 'tvSeries';

export const tvSeriesReducer = combineReducers({
  popularTvSeries: popularTvSeriesReducer,
  onTheAirTvSeries: onTheAirTvSeriesReducer,
  AiringTodayTvSeries: airingTodayTvSeriesReducer,
  topRatedTvSeries: topRatedTvSeriesReducer,
  tvSeriesDetails: tvSeriesDetailsReducer,
  tvSeriesSeasons: tvSeriesSeasonReducer
})
