import {createFeatureSelector} from "@ngrx/store";
import {SearchState} from "../reducers/search.reducer";

export const selectSearchFeature = createFeatureSelector<SearchState>('search');
