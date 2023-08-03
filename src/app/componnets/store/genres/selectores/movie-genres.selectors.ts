import {createSelector} from "@ngrx/store";
import {selectMovieGenreState} from "./genres.selectors";
import {MovieGenresState} from "../reducers/movie-genres.reducers";

export const selectMovieGenres = createSelector(selectMovieGenreState,( state: MovieGenresState) => state.genres);
export const selectMovieGenresLoading = createSelector(selectMovieGenreState,( state: MovieGenresState) => state.loading);
export const selectMovieGenresSuccess = createSelector(selectMovieGenreState,( state: MovieGenresState) => state.success);
export const selectMovieGenresError = createSelector(selectMovieGenreState,( state: MovieGenresState) => state.error);
