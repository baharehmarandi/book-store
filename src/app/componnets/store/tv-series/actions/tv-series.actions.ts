import {createActionGroup, props} from "@ngrx/store";
import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";

export const PopularTvSeriesActions = createActionGroup({
  source: 'PopularTvSeries',
  events: {
    'Load PopularTvSeries': props<{page: number}>(),
    'Load PopularTvSeriesSuccess': props<{payload: ITvSeriesResult[], total: number}>(),
    'Load PopularTvSeriesFailure': props<{error: HttpErrorResponse}>()
  }
});

export const OnTheAirTvSeriesAction = createActionGroup({
  source: 'OnTheAirTvSeries',
  events: {
    'Load OnTheAirTvSeries': props<{page: number}>(),
    'Load OnTheAirTvSeriesSuccess': props<{payload: ITvSeriesResult[], total: number}>(),
    'Load OnTheAirTvSeriesFailure': props<{error: HttpErrorResponse}>(),
  }
});

export const AiringTodayTvSeriesAction = createActionGroup({
  source: 'AiringTodayTvSeries',
  events: {
    'Load AiringTodayTvSeries': props<{page: number}>(),
    'Load AiringTodayTvSeriesSuccess': props<{payload: ITvSeriesResult[], total: number}>(),
    'Load AiringTodayTvSeriesFailure': props<{error: HttpErrorResponse}>(),
  }
});

export const TopRatedTvSeriesAction = createActionGroup({
  source: 'TopRatedTvSeries',
  events: {
    'Load TopRatedTvSeries': props<{page: number}>(),
    'Load TopRatedTvSeries Success': props<{payload:ITvSeriesResult[], total: number}>(),
    'Load TopRatedTvSeries Failure': props<{error: HttpErrorResponse}>()
  }
})
