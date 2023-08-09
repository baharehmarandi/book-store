import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../../modules/home/home.service";
import {AiringTodayTvSeriesAction, OnTheAirTvSeriesAction, PopularTvSeriesActions, TopRatedTvSeriesAction} from "../actions/tv-series.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ITvSeries} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";

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

    }
