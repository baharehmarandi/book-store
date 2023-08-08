import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {ITvSeriesResult} from "../../componnets/models/tv-series.model";
import {Store} from "@ngrx/store";
import {AiringTodayTvSeriesAction} from "../../componnets/store/tv-series/actions/tv-series.actions";
import {
  selectAiringTodayTvSeries,
  selectAiringTodayTvSeriesTotal
} from "../../componnets/store/tv-series/selectors/AiringToday-tvSeries.selectors";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-airing-today-tv-series',
  templateUrl: './airing-today-tv-series.component.html',
  styleUrls: ['./airing-today-tv-series.component.scss']
})
export class AiringTodayTvSeriesComponent implements OnInit {

  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  airingTodayTvSeriesLists$: Observable<ITvSeriesResult[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(AiringTodayTvSeriesAction.loadAiringTodayTvSeries({page: this.page}));
    this.airingTodayTvSeriesLists$ = this.store.select(selectAiringTodayTvSeries);
    this.total$ = this.store.select(selectAiringTodayTvSeriesTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(AiringTodayTvSeriesAction.loadAiringTodayTvSeries({page: this.page}));
  }

}
