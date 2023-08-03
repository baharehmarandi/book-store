import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IResults} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";

export const PopularMovieActions = createActionGroup({
  source: 'MoviePopular',
  events: {
    'Load PopularMovies': emptyProps(),
    'Load PopularMovies Success': props<{payload: IResults[]}>(),
    'Load PopularMovies Failure': props<{error: HttpErrorResponse}>(),
  }
})

export const UpComingMovieActions = createActionGroup({
  source: 'MovieUpComing',
  events: {
    'Load UpComingMovies': emptyProps(),
    'Load UpComingMovies Success': props<{payload: IResults[]}>(),
    'Load UpComingMovies Failure': props<{error: HttpErrorResponse}>(),
  }
})

export const NowPlayingMovieActions = createActionGroup({
  source: 'MovieNowPlaying',
  events: {
    'Load NowPlayingMovies': emptyProps(),
    'Load NowPlayingMovies Success': props<{payload: IResults[]}>(),
    'Load NowPlayingMovies Failure': props<{error: HttpErrorResponse}>(),
  }
})
