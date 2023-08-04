import {createSelector} from "@ngrx/store";
import {selectAiringTodayTvSeriesState} from "./tvSeries.selectors";
import {AiringTodayTvSeriesState} from "../reducers/AiringToday-TvSeries.reducers";

export const selectAiringTodayTvSeries = createSelector(selectAiringTodayTvSeriesState, (state: AiringTodayTvSeriesState) => state.airingTodayTvSeries);

export const selectAiringTodayYvSeriesLoading = createSelector(selectAiringTodayTvSeriesState, (state:AiringTodayTvSeriesState) => state.loading);

export const selectAiringTodayTvSeriesSuccess = createSelector(selectAiringTodayTvSeriesState, (state: AiringTodayTvSeriesState) => state.success);

export const selectAiringTodayTvSeriesError = createSelector(selectAiringTodayTvSeriesState, (state: AiringTodayTvSeriesState) => state.error)
