import {createSelector} from "@ngrx/store";
import {selectTopRatedMovieState} from "./movie.selectors";
import {TopRatedMovieState} from "../reducers/topRated-movie.reducers";

export const selectTopRatedMovie = createSelector(selectTopRatedMovieState, (state: TopRatedMovieState) => state.topRatedMovieLists);

export const selectTopRatedMovieLoading = createSelector(selectTopRatedMovieState, (state: TopRatedMovieState) => state.loading);

export const selectTopRatedMovieSuccess = createSelector(selectTopRatedMovieState, (state: TopRatedMovieState) => state.success);

export const selectTopRatedMovieError = createSelector(selectTopRatedMovieState, (state: TopRatedMovieState) => state.error);

export const selectTopRatedMovieTotal = createSelector(selectTopRatedMovieState, (state: TopRatedMovieState) => state.total);
