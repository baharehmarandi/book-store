import {createSelector} from "@ngrx/store";
import {selectNowPlayingMovieState} from "./movie.selectors";
import {NowPlayingMovieState} from "../reducers/nowPlaying-movie.reducers";

export const selectNowPlayingMovie = createSelector(selectNowPlayingMovieState, (state: NowPlayingMovieState) => state.nowPlayingMovie);
export const selectNowPlayingMovieLoading = createSelector(selectNowPlayingMovieState, (state: NowPlayingMovieState) => state.loading);
export const selectNowPlayingSuccess = createSelector(selectNowPlayingMovieState, (state: NowPlayingMovieState) => state.success);
export const selectNowPlayingMovieTotal = createSelector(selectNowPlayingMovieState, (state: NowPlayingMovieState) => state.total);
export const selectNowPlayingMovieError = createSelector(selectNowPlayingMovieState, (state: NowPlayingMovieState) => state.error);
