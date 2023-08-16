import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ISearchResult} from "../../componnets/models/search.model";
import {SearchAction} from "../../componnets/store/search/actions/search.action";
import {selectSearch} from "../../componnets/store/search/selectors/search.selector";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  value: string = "";
  showPopup: boolean = false;
  searchValue$: Observable<ISearchResult[] | undefined>;

  constructor (private store: Store){

    this.searchValue$ = this.store.select(selectSearch)
  }

  onInputChange(searchEvent: any){
    this.store.dispatch(SearchAction.loadSearch({query: searchEvent.target.value}))
    this.showPopup = true;
  }
}
