import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {
  OnTheAirTvSeriesAction
} from "../../componnets/store/tv-series/actions/tv-series.actions";
import {ITvSeriesResult} from "../../componnets/models/tv-series.model";
import {
  selectOnTheAirTvSeries,
  selectOnTheAirTvSeriesTotal
} from "../../componnets/store/tv-series/selectors/onTheAir-tvSeries.selectors";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-on-the-air-tv-series',
  templateUrl: './on-the-air-tv-series.component.html',
  styleUrls: ['./on-the-air-tv-series.component.scss']
})
export class OnTheAirTvSeriesComponent implements OnInit {

  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  onTheAirTvSeriesLists$: Observable<ITvSeriesResult[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(OnTheAirTvSeriesAction.loadOnTheAirTvSeries({page: this.page}));
    this.onTheAirTvSeriesLists$ = this.store.select(selectOnTheAirTvSeries);
    this.total$ = this.store.select(selectOnTheAirTvSeriesTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(OnTheAirTvSeriesAction.loadOnTheAirTvSeries({page: this.page}));
  }
}
