import {createSelector} from "@ngrx/store";
import {selectTvGenreState} from "./genres.selectors";
import {TvGenresState} from "../reducers/tv-genres.reducers";


export const selectTvGenres = createSelector(selectTvGenreState,( state: TvGenresState) => state.genres);
export const selectTvGenresLoading = createSelector(selectTvGenreState,( state: TvGenresState) => state.loading);
export const selectTvGenresSuccess = createSelector(selectTvGenreState,( state: TvGenresState) => state.success);
export const selectTvGenresError = createSelector(selectTvGenreState,( state: TvGenresState) => state.error);
