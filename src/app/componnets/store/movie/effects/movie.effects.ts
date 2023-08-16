import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../../modules/home/home.service";
import {
  MovieDetailsActions,
  NowPlayingMovieActions,
  PopularMovieActions,
  TopRatedMovieActions,
  UpComingMovieActions
} from "../actions/movie.actions";
import {catchError, map, mergeMap, of, switchMap} from "rxjs";
import {IMovie} from "../../../models/movie.model";
import {HttpErrorResponse} from "@angular/common/http";
import {IMovieDetails} from "../../../models/movie-details.model";

@Injectable()
export class MovieEffects {

  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadPopularMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PopularMovieActions.loadPopularMovies),
      mergeMap((action) => this.homeService.getMoviesList('popular', action.page).pipe(
        map((response: IMovie) =>
        PopularMovieActions.loadPopularMoviesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(PopularMovieActions.loadPopularMoviesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(PopularMovieActions.loadPopularMoviesFailure(error)))
    )
  });

  loadUpComingMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(UpComingMovieActions.loadUpComingMovies),
      switchMap((action) => this.homeService.getMoviesList('upcoming', action.page).pipe(
        map((response: IMovie) =>
          UpComingMovieActions.loadUpComingMoviesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(UpComingMovieActions.loadUpComingMoviesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(UpComingMovieActions.loadUpComingMoviesFailure(error)))
    )
  });

  loadNowPlayingMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(NowPlayingMovieActions.loadNowPlayingMovies),
      switchMap((action) => this.homeService.getMoviesList('now_playing', action.page).pipe(
        map((response: IMovie) =>
          NowPlayingMovieActions.loadNowPlayingMoviesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(NowPlayingMovieActions.loadNowPlayingMoviesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(NowPlayingMovieActions.loadNowPlayingMoviesFailure(error)))
    )
  });

  loadTopRatedMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(TopRatedMovieActions.loadTopRatedMovies),
      switchMap((action) => this.homeService.getMoviesList('top_rated', action.page).pipe(
        map((response: IMovie) =>
          TopRatedMovieActions.loadTopRatedMoviesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(TopRatedMovieActions.loadTopRatedMoviesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(TopRatedMovieActions.loadTopRatedMoviesFailure(error)))
    )
  })

  loadDetailsMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(MovieDetailsActions.loadMovieDetails),
      switchMap((action) => this.homeService.getMovieDetails(action.id).pipe(
        map((response: IMovieDetails) =>
          MovieDetailsActions.loadMovieDetailsSuccess({payload: response})),
        catchError((error: HttpErrorResponse) => of(MovieDetailsActions.loadMovieDetailsFailure(error)))
      )),
    catchError((error: HttpErrorResponse) => of(MovieDetailsActions.loadMovieDetailsFailure(error)))
    )
  })
}
