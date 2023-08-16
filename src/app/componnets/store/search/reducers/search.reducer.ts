import {ISearchResult} from "../../../models/search.model";
import {HttpErrorResponse} from "@angular/common/http";
import {createReducer, on} from "@ngrx/store";
import {SearchAction} from "../actions/search.action";

export interface SearchState {
  search?: ISearchResult[],
  loading?: boolean,
  success?: boolean,
  error?: HttpErrorResponse
}

export const initialState: SearchState = {
  search: undefined,
  loading: undefined,
  success: undefined,
  error: undefined
}

export const searchReducer = createReducer(
  initialState,
  on(SearchAction.loadSearch, (state) => ({
    ...state,
    loading: true,
    success: undefined,
    error: undefined
  })),
  on(SearchAction.loadSearchSuccess, (state, action) => ({
    ...state,
    loading: false,
    success: true,
    search: action.payload,
  })),
  on(SearchAction.loadSearchFailure, (state, action) => ({
    ...state,
    loading: false,
    success: false,
    error: action.error
  }))
)
