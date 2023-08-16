import {createSelector} from "@ngrx/store";
import {selectTvSeriesSeasonState} from "./tvSeries.selectors";
import {TvSeriesSeasonState} from "../reducers/tvSeriesSeason.reducers";

export const selectTvSeriesSeason = createSelector(selectTvSeriesSeasonState, (state: TvSeriesSeasonState) => state.tvSeriesSeason);

export const selectTvSeriesSeasonLoading = createSelector(selectTvSeriesSeasonState, (state: TvSeriesSeasonState) => state.loading);

export const selectTvSeriesSeasonSuccess = createSelector(selectTvSeriesSeasonState, (state: TvSeriesSeasonState) => state.success);

export const selectTvSeriesSeasonError = createSelector(selectTvSeriesSeasonState, (state: TvSeriesSeasonState) => state.error);
