import {Component, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {ITvSeriesResult} from "../../componnets/models/tv-series.model";
import {Store} from "@ngrx/store";
import {TopRatedTvSeriesAction} from "../../componnets/store/tv-series/actions/tv-series.actions";
import { selectTopRatedTvSeries, selectTopRatedTvSeriesTotal } from 'src/app/componnets/store/tv-series/selectors/TopRated-tvSeries.seelctors';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-top-rated-tv-series',
  templateUrl: './top-rated-tv-series.component.html',
  styleUrls: ['./top-rated-tv-series.component.scss']
})
export class TopRatedTvSeriesComponent {

  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  topRatedTvSeriesLists$: Observable<ITvSeriesResult[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(TopRatedTvSeriesAction.loadTopRatedTvSeries({page: this.page}));
    this.topRatedTvSeriesLists$ = this.store.select(selectTopRatedTvSeries);
    this.total$ = this.store.select(selectTopRatedTvSeriesTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(TopRatedTvSeriesAction.loadTopRatedTvSeries({page: this.page}));
  }

}
