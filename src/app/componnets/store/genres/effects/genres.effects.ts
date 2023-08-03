import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MovieGenresActions, TvGenresActions} from "../actions/genres.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {HomeService} from "../../../../modules/home/home.service";
import {IGenresResponse} from "../../../models/genres.model";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class GenresEffects {
  constructor(private actions$: Actions,
              private homeService: HomeService) {}

  loadTvGenres$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TvGenresActions.loadTvGenres),
      switchMap(() => this.homeService.getGenres('tv').pipe(
        map((response: IGenresResponse) =>
        TvGenresActions.loadTvGenresSuccess({payload: response.genres}))
      )),
      catchError((error: HttpErrorResponse) => of(TvGenresActions.loadTvGenresFailure(error)))
    )
  });

  loadMovieGenres$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MovieGenresActions.loadMovieGenres),
      switchMap(() => this.homeService.getGenres('movie').pipe(
        map((response: IGenresResponse) =>
        MovieGenresActions.loadMovieGenresSuccess({payload: response.genres}))
      )),
      catchError((error: HttpErrorResponse) => of(MovieGenresActions.loadMovieGenresFailure(error)))
  )
});
}
