import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../../modules/home/home.service";
import {NowPlayingMovieActions, PopularMovieActions, UpComingMovieActions} from "../actions/movie.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {IMovie} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class MovieEffects {

  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadPopularMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PopularMovieActions.loadPopularMovies),
      switchMap(() => this.homeService.getMoviesList('popular').pipe(
        map((response: IMovie) =>
        PopularMovieActions.loadPopularMoviesSuccess({payload: response.results}))
      )),
      catchError((error: HttpErrorResponse) => of(PopularMovieActions.loadPopularMoviesFailure(error)))
    )
  });

  loadUpComingMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(UpComingMovieActions.loadUpComingMovies),
      switchMap(() => this.homeService.getMoviesList('upcoming').pipe(
        map((response: IMovie) =>
          UpComingMovieActions.loadUpComingMoviesSuccess({payload: response.results}))
      )),
      catchError((error: HttpErrorResponse) => of(UpComingMovieActions.loadUpComingMoviesFailure(error)))
    )
  });

  loadNowPlayingMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(NowPlayingMovieActions.loadNowPlayingMovies),
      switchMap(() => this.homeService.getMoviesList('now_playing').pipe(
        map((response: IMovie) =>
          NowPlayingMovieActions.loadNowPlayingMoviesSuccess({payload: response.results}))
      )),
      catchError((error: HttpErrorResponse) => of(NowPlayingMovieActions.loadNowPlayingMoviesFailure(error)))
    )
  });
}
