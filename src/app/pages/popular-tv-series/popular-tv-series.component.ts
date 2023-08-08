import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {PopularTvSeriesActions} from "../../componnets/store/tv-series/actions/tv-series.actions";
import {
  selectPopularTvSeries,
  selectPopularTvSeriesTotal
} from "../../componnets/store/tv-series/selectors/popular-tvSeries.selectors";
import {ITvSeriesResult} from "../../componnets/models/tv-series.model";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-popular-tv-series',
  templateUrl: './popular-tv-series.component.html',
  styleUrls: ['./popular-tv-series.component.scss']
})
export class PopularTvSeriesComponent implements OnInit {
  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  popularTvSeriesLists$: Observable<ITvSeriesResult[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(PopularTvSeriesActions.loadPopularTvSeries({page: this.page}));
    this.popularTvSeriesLists$ = this.store.select(selectPopularTvSeries);
    this.total$ = this.store.select(selectPopularTvSeriesTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(PopularTvSeriesActions.loadPopularTvSeries({page: this.page}));
  }
}
