import {combineReducers} from "@ngrx/store";
import {tvGenresReducer, TvGenresState} from "./tv-genres.reducers";
import {movieGenresReducer, MovieGenresState} from "./movie-genres.reducers";

export interface GenresState {
  tvGenres: TvGenresState,
  movieGenres: MovieGenresState
}
export const genresKeyFeature = "genres";
export const genresReducer = combineReducers({
  tvGenres: tvGenresReducer,
  movieGenres: movieGenresReducer,
})
