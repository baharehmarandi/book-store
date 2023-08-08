import {createSelector} from "@ngrx/store";
import {selectUpComingMovieState} from "./movie.selectors";
import {UpComingMovieState} from "../reducers/upComing-movie.reducers";

export const selectUpComingMovie = createSelector(selectUpComingMovieState, (state: UpComingMovieState) => state.upComingMoviesList);
export const selectUpComingMovieLoading = createSelector(selectUpComingMovieState, (state: UpComingMovieState) => state.loading);
export const selectUpComingMovieSuccess = createSelector(selectUpComingMovieState, (state: UpComingMovieState) => state.success);
export const selectUpComingMovieTotal = createSelector(selectUpComingMovieState, (state: UpComingMovieState) => state.total);
export const selectUpComingMovieError = createSelector(selectUpComingMovieState, (state: UpComingMovieState) => state.error);
