import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {Observable, tap} from "rxjs";
import {ITvSeriesDetails} from "../../componnets/models/tvSeries-details.model";
import {selectTvSeriesDetails} from "../../componnets/store/tv-series/selectors/tvSeriesDetails.selectors";
import {
  TvSeriesDetailsActions
} from "../../componnets/store/tv-series/actions/tv-series.actions";
import {imageBaseUrl} from "../../../environments/environment";

@Component({
  selector: 'app-tv-series-details-single-page',
  templateUrl: './tv-series-details-single-page.component.html',
  styleUrls: ['./tv-series-details-single-page.component.scss']
})
export class TvSeriesDetailsSinglePageComponent implements OnInit{

  id: number = this.activatedRoute.snapshot.params['id'];
  tvSeriesDetails$: Observable<ITvSeriesDetails | undefined>;
  data?: any;
  value?: number;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store) {
    this.tvSeriesDetails$ = this.store.select(selectTvSeriesDetails).pipe(
      tap((data) =>
        this.value = data?.vote_average
      )
    );
  }

  ngOnInit() {
    this.store.dispatch(TvSeriesDetailsActions.loadTvSeriesDetails({id: this.id}))
  }

  protected readonly imageBaseUrl = imageBaseUrl;
}
