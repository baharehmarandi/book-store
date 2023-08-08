import {createActionGroup, props} from "@ngrx/store";
import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";

export const PopularMovieActions = createActionGroup({
  source: 'MoviePopular',
  events: {
    'Load PopularMovies': props<{page: number}>(),
    'Load PopularMovies Success': props<{payload: IResults[], total: number}>(),
    'Load PopularMovies Failure': props<{error: HttpErrorResponse}>(),
  }
});

export const UpComingMovieActions = createActionGroup({
  source: 'MovieUpComing',
  events: {
    'Load UpComingMovies': props<{page: number}>(),
    'Load UpComingMovies Success': props<{payload: IResults[], total: number}>(),
    'Load UpComingMovies Failure': props<{error: HttpErrorResponse}>(),
  }
});

export const NowPlayingMovieActions = createActionGroup({
  source: 'MovieNowPlaying',
  events: {
    'Load NowPlayingMovies': props<{page: number}>(),
    'Load NowPlayingMovies Success': props<{payload: IResults[], total: number}>(),
    'Load NowPlayingMovies Failure': props<{error: HttpErrorResponse}>(),
  }
});
