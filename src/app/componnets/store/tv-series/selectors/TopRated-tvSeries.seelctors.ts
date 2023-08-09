import {createSelector} from "@ngrx/store";
import {selectPopularTvSeriesState, selectTopRatedTvSeriesState} from "./tvSeries.selectors";
import {TopRatedTvSeriesState} from "../reducers/topRated-tvSeries.reducers";

export const selectTopRatedTvSeries = createSelector(selectTopRatedTvSeriesState, (state: TopRatedTvSeriesState) => state.topRatedTvSeries);

export const selectTopRatedTvSeriesLoading = createSelector(selectPopularTvSeriesState, (state: TopRatedTvSeriesState) => state.loading);

export const selectToprated
