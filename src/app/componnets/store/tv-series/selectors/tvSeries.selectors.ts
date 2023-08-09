import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TvSeriesState} from "../reducers/tvSeries.reducers";

export const selectTvSeries = createFeatureSelector<TvSeriesState>('tvSeries');

export const selectPopularTvSeriesState = createSelector(selectTvSeries,(state: TvSeriesState) => state.popularTvSeries);

export const selectOnTheAirTvSeriesState = createSelector(selectTvSeries, (state: TvSeriesState) => state.onTheAirTvSeries);

export const selectAiringTodayTvSeriesState = createSelector(selectTvSeries, (state: TvSeriesState) => state.AiringTodayTvSeries);

export const selectTopRatedTvSeriesState = createSelector(selectTvSeries, (state: TvSeriesState) => state.topRatedTvSeries);
