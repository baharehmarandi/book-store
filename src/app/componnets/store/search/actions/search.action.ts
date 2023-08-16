import {createActionGroup, props} from "@ngrx/store";
import {ISearchResult} from "../../../models/search.model";
import {HttpErrorResponse} from "@angular/common/http";

export const SearchAction = createActionGroup({
  source: 'search',
  events: {
    'Load Search': props<{query: string}>(),
    'Load Search Success': props<{payload: ISearchResult[]}>(),
    'Load Search Failure': props<{error: HttpErrorResponse}>()
  }
});
