import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {HomeService} from "../../../../modules/home/home.service";
import {SearchAction} from "../actions/search.action";
import {catchError, map, mergeMap, of} from "rxjs";
import {ISearch} from "../../../models/search.model";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class SearchEffect {

  constructor(private action$: Actions,
              private homeService: HomeService) {}

  loadSearch$ = createEffect(() => {
    return this.action$.pipe(
      ofType(SearchAction.loadSearch),
      mergeMap((action) => this.homeService.getSearchList(action.query).pipe(
        map((response: ISearch) =>
        SearchAction.loadSearchSuccess({payload: response.results!})),
        catchError((error: HttpErrorResponse) => of(SearchAction.loadSearchFailure(error)))
      )),
      catchError((error: HttpErrorResponse) => of(SearchAction.loadSearchFailure(error)))
    )
  })
}
