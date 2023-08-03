import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {IGenres} from "../../../models/genres.model";
import {HttpErrorResponse} from "@angular/common/http";

export const TvGenresActions = createActionGroup({
  source: 'TvGenres',
  events: {
    'Load TvGenres' : emptyProps(),
    'Load TvGenres Success' : props<{payload: IGenres[]}>(),
    'Load TvGenres Failure' : props<{error: HttpErrorResponse}>(),
  }
})

export const MovieGenresActions = createActionGroup({
  source: 'MovieGenres',
  events: {
    'Load MovieGenres' : emptyProps(),
    'Load MovieGenres Success' : props<{payload: IGenres[]}>(),
    'Load MovieGenres Failure' : props<{error: HttpErrorResponse}>(),
  }
})
