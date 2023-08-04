import {createSelector} from "@ngrx/store";
import {PopularTvSeriesState} from "../reducers/popular-tvSeries.reducers";
import {selectPopularTvSeriesState} from "./tvSeries.selectors";
import {selectPopularMovieState} from "../../movie/selectors/movie.selectors";

export const selectPopularTvSeries = createSelector(selectPopularTvSeriesState,(state:PopularTvSeriesState) => state.popularTvSeries);

export const selectPopularTvSeriesLoading = createSelector(selectPopularMovieState,(state: PopularTvSeriesState) => state.loading);

export const selectPopularTvSeriesSuccess = createSelector(selectPopularTvSeriesState,(state: PopularTvSeriesState) => state.success);

export const selectPopularTvSeriesError = createSelector(selectPopularTvSeriesState, (state: PopularTvSeriesState) => state.error);
