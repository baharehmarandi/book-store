import {createSelector} from "@ngrx/store";
import {selectDetailsMovieState} from "./movie.selectors";
import {MovieDetailsState} from "../reducers/movieDetails.reducers";

export const selectDetailsMovie = createSelector(selectDetailsMovieState, (state: MovieDetailsState) => state.movieDetails);

export const selectDetailsMovieLoading = createSelector(selectDetailsMovieState, (state: MovieDetailsState) => state.loading);

export const selectDetailsMovieSuccess = createSelector(selectDetailsMovieState, (state: MovieDetailsState) => state.success);

export const selectDetailsMovieError = createSelector(selectDetailsMovieState, (state: MovieDetailsState) => state.error)
