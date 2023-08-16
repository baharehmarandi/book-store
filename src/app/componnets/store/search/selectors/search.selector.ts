import {createSelector} from "@ngrx/store";
import {SearchState} from "../reducers/search.reducer";
import {selectSearchFeature} from "./searchFeature.selector";

export const selectSearch = createSelector(selectSearchFeature, (state: SearchState) => state.search);

export const selectSearchLoading = createSelector(selectSearchFeature,(state: SearchState) => state.loading);

export const selectSearchSuccess = createSelector(selectSearchFeature, (state: SearchState) => state.success);

export const selectSearchError = createSelector(selectSearchFeature, (state: SearchState) => state.error);
