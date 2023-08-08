import {createSelector} from "@ngrx/store";
import {selectOnTheAirTvSeriesState} from "./tvSeries.selectors";
import {OnTheAirTvSeriesState} from "../reducers/onTheAir-TvSeries.reducers";

export const selectOnTheAirTvSeries = createSelector(selectOnTheAirTvSeriesState, (state: OnTheAirTvSeriesState) => state.onTheAirTvSeries);

export const selectOnTheAirTvSeriesLoading = createSelector(selectOnTheAirTvSeriesState,(state: OnTheAirTvSeriesState) => state.loading);

export const selectOnTheAirTvSeriesSuccess = createSelector(selectOnTheAirTvSeriesState, (state: OnTheAirTvSeriesState) => state.success);
export const selectOnTheAirTvSeriesTotal = createSelector(selectOnTheAirTvSeriesState, (state: OnTheAirTvSeriesState) => state.total);
export const selectOnTheAirTvSeriesError = createSelector(selectOnTheAirTvSeriesState, (state: OnTheAirTvSeriesState) => state.error);
