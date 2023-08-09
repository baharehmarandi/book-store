import {createSelector} from "@ngrx/store";
import {selectTopRatedTvSeriesState} from "./tvSeries.selectors";
import {TopRatedTvSeriesState} from "../reducers/topRated-tvSeries.reducers";

export const selectTopRatedTvSeries = createSelector(selectTopRatedTvSeriesState, (state: TopRatedTvSeriesState) => state.topRatedTvSeries);

export const selectTopRatedTvSeriesLoading = createSelector(selectTopRatedTvSeriesState, (state: TopRatedTvSeriesState) => state.loading);

export const selectTopRatedTvSeriesSuccess = createSelector(selectTopRatedTvSeriesState, (state: TopRatedTvSeriesState) => state.success);

export const selectTopRatedTvSeriesFailuer = createSelector(selectTopRatedTvSeriesState, (state: TopRatedTvSeriesState) => state.error);

export const selectTopRatedTvSeriesTotal = createSelector(selectTopRatedTvSeriesState, (state: TopRatedTvSeriesState) => state.total);
