import {createSelector} from "@ngrx/store";
import {selectTvSeriesDetailsState} from "./tvSeries.selectors";
import {TvSeriesDetailsState} from "../reducers/tvSeriesDetails.reducers";

export const selectTvSeriesDetails = createSelector(selectTvSeriesDetailsState, (state: TvSeriesDetailsState) => state.tvSeriesDetails);

export const selectTvSeriesDetailsLoading = createSelector(selectTvSeriesDetailsState, (state: TvSeriesDetailsState) => state.loading);

export const selectTvSeriesDetailsSuccess = createSelector(selectTvSeriesDetailsState, (state: TvSeriesDetailsState) => state.success);

export const selectTvSeriesDetailsError = createSelector(selectTvSeriesDetailsState, (state: TvSeriesDetailsState) => state.error);
