import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {ITvSeriesResult} from "../../../models/tv-series.model";
import {HttpErrorResponse} from "@angular/common/http";

export const PopularTvSeriesActions = createActionGroup({
  source: 'PopularTvSeries',
  events: {
    'Load PopularTvSeries': emptyProps(),
    'Load PopularTvSeriesSuccess': props<{payload: ITvSeriesResult[]}>(),
    'Load PopularTvSeriesFailure': props<{error: HttpErrorResponse}>()
  }
});

export const OnTheAirTvSeriesAction = createActionGroup({
  source: 'OnTheAirTvSeries',
  events: {
    'Load OnTheAirTvSeries': emptyProps(),
    'Load OnTheAirTvSeriesSuccess': props<{payload: ITvSeriesResult[]}>(),
    'Load OnTheAirTvSeriesFailure': props<{error: HttpErrorResponse}>(),
  }
});

export const AiringTodayTvSeriesAction = createActionGroup({
  source: 'AiringTodayTvSeries',
  events: {
    'Load AiringTodayTvSeries': emptyProps(),
    'Load AiringTodayTvSeriesSuccess': props<{payload: ITvSeriesResult[]}>(),
    'Load AiringTodayTvSeriesFailure': props<{error: HttpErrorResponse}>(),
  }
});
