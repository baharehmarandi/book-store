import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../../modules/home/home.service";
import {
  AiringTodayTvSeriesAction,
  OnTheAirTvSeriesAction,
  PopularTvSeriesActions,
  TopRatedTvSeriesAction,
  TvSeriesDetailsActions, TvSeriesSeasonActions
} from "../actions/tv-series.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ITvSeries} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ITvSeriesDetails} from "../../../models/tvSeries-details.model";
import {ITvSeriesSeasons} from "../../../models/tvSeriesSeasons.model";

@Injectable()
export class TvSeriesEffects {

  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadPopularTvSeries$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PopularTvSeriesActions.loadPopularTvSeries),
      switchMap((action) => this.homeService.getTvSeriesList('popular', action.page).pipe(
        map((response: ITvSeries) =>
          PopularTvSeriesActions.loadPopularTvSeriesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(PopularTvSeriesActions.loadPopularTvSeriesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(PopularTvSeriesActions.loadPopularTvSeriesFailure(error)))
    )
  });

  loadOnTheAirTvSeries$ = createEffect(() => {
    return this.action$.pipe(
      ofType(OnTheAirTvSeriesAction.loadOnTheAirTvSeries),
      switchMap((action) => this.homeService.getTvSeriesList('on_the_air', action.page).pipe(
        map((response: ITvSeries) =>
          OnTheAirTvSeriesAction.loadOnTheAirTvSeriesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesFailure(error)))
    )
  });

  loadAiringTvSeries$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AiringTodayTvSeriesAction.loadAiringTodayTvSeries),
      switchMap((action) => this.homeService.getTvSeriesList('airing_today', action.page).pipe(
        map((response: ITvSeries) =>
          AiringTodayTvSeriesAction.loadAiringTodayTvSeriesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(AiringTodayTvSeriesAction.loadAiringTodayTvSeriesFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(AiringTodayTvSeriesAction.loadAiringTodayTvSeriesFailure(error)))
    )
  });

  loadTopRatedTvSeries$ = createEffect(() => {
    return this.action$.pipe(
      ofType(TopRatedTvSeriesAction.loadTopRatedTvSeries),
      switchMap((action) => this.homeService.getTvSeriesList('top_rated',  action.page).pipe(
        map((response: ITvSeries) =>
          TopRatedTvSeriesAction.loadTopRatedTvSeriesSuccess({payload: response.results, total: response.total_results})),
        catchError((error: HttpErrorResponse) => of(TopRatedTvSeriesAction.loadTopRatedTvSeriesFailure(error)))
          )),
          catchError((error: HttpErrorResponse) => of(TopRatedTvSeriesAction.loadTopRatedTvSeriesFailure(error)))
        )
      });

  loadTvSeriesDetails$ = createEffect(() => {
    return this.action$.pipe(
      ofType(TvSeriesDetailsActions.loadTvSeriesDetails),
      switchMap((action) => this.homeService.getTvSeriesDetails(action.id).pipe(
        map((response: ITvSeriesDetails) =>
          TvSeriesDetailsActions.loadTvSeriesDetailsSuccess({payload: response})),
        catchError((error: HttpErrorResponse) => of(TvSeriesDetailsActions.loadTvSeriesDetailsFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(TvSeriesDetailsActions.loadTvSeriesDetailsFailure(error)))
    )
  });

  loadTvSeriesSeasons$ = createEffect(() => {
    return this.action$.pipe(
      ofType(TvSeriesSeasonActions.loadTvSeriesSeason),
      switchMap((action) => this.homeService.getTvSeriesSeasons(action.id, action.seasonNum).pipe(
        map((response: ITvSeriesSeasons) => TvSeriesSeasonActions.loadTvSeriesSeasonSuccess({payload: response})),
      catchError((error: HttpErrorResponse) => of(TvSeriesSeasonActions.loadTvSeriesSeasonFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(TvSeriesSeasonActions.loadTvSeriesSeasonFailure(error)))
    )
  });
}
