import {createSelector} from "@ngrx/store";
import {selectPopularMovieState} from "./movie.selectors";
import {PopularMoviesState} from "../reducers/popular-movies.reducers";

export const selectPopularMovie = createSelector(selectPopularMovieState, (state: PopularMoviesState) => state.moviePopularList);
export const selectPopularMovieLoading = createSelector(selectPopularMovieState, (state: PopularMoviesState) => state.loading);
export const selectPopularMovieSuccess = createSelector(selectPopularMovieState, (state: PopularMoviesState) => state.success);
export const selectPopularMovieError = createSelector(selectPopularMovieState, (state: PopularMoviesState) => state.error);
