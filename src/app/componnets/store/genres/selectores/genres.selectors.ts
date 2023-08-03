import {createFeatureSelector, createSelector} from "@ngrx/store";
import {GenresState} from "../reducers/genres.reducers";

export const selectGenres = createFeatureSelector<GenresState>('genres')

export const selectTvGenreState= createSelector(selectGenres, (state: GenresState) => state.tvGenres);
export const selectMovieGenreState= createSelector(selectGenres, (state: GenresState) => state.movieGenres);
