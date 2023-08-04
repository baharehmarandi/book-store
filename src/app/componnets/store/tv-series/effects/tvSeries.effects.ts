import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../../modules/home/home.service";
import {AiringTodayTvSeriesAction, OnTheAirTvSeriesAction, PopularTvSeriesActions} from "../actions/tv-series.actions";
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
      switchMap(() => this.homeService.getTvSeriesList('popular').pipe(
        map((response: ITvSeries) =>
          PopularTvSeriesActions.loadPopularTvSeriesSuccess({payload: response.results}))
      )),
      catchError((error: HttpErrorResponse) => of(PopularTvSeriesActions.loadPopularTvSeriesFailure(error)))
    )
  });

  loadOnTheAirTvSeries$ = createEffect(() => {
    return this.action$.pipe(
      ofType(OnTheAirTvSeriesAction.loadOnTheAirTvSeries),
      switchMap(() => this.homeService.getTvSeriesList('on_the_air').pipe(
        map((response: ITvSeries) =>
          OnTheAirTvSeriesAction.loadOnTheAirTvSeriesSuccess({payload: response.results}))
      )),
      catchError((error: HttpErrorResponse) => of(OnTheAirTvSeriesAction.loadOnTheAirTvSeriesFailure(error)))
    )
  });

  loadAiringTvSeries$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AiringTodayTvSeriesAction.loadAiringTodayTvSeries),
      switchMap(() => this.homeService.getTvSeriesList('airing_today').pipe(
        map((response: ITvSeries) =>
          AiringTodayTvSeriesAction.loadAiringTodayTvSeriesSuccess({payload:response.results}))
      )),
      catchError((error: HttpErrorResponse) => of(AiringTodayTvSeriesAction.loadAiringTodayTvSeriesFailure(error)))
    )
  });
}
