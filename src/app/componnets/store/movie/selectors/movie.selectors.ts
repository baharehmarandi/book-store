import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MovieState} from "../reducers/movie.reducers";

export const selectMovie = createFeatureSelector<MovieState>('movie');

export const selectPopularMovieState = createSelector(selectMovie, (state:MovieState) => state.popularMovie);

export const selectUpComingMovieState = createSelector(selectMovie, (state:MovieState) => state.upComingMovie);

export const selectNowPlayingMovieState = createSelector(selectMovie, (state: MovieState) => state.nowPlayingMovie);

export const selectTopRatedMovieState = createSelector(selectMovie, (state: MovieState) => state.topRatedMovie);

export const selectDetailsMovieState = createSelector(selectMovie, (state: MovieState) => state.detailsMovie);
