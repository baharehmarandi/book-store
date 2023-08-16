import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTvSeriesSeason} from "../../../../componnets/store/tv-series/selectors/tvSeriesSeason.selectors";
import {Observable, tap} from "rxjs";
import {ITvSeriesSeasons} from "../../../../componnets/models/tvSeriesSeasons.model";
import {TvSeriesSeasonActions} from "../../../../componnets/store/tv-series/actions/tv-series.actions";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tv-series-episodes',
  templateUrl: './tv-series-episodes.component.html',
  styleUrls: ['./tv-series-episodes.component.scss']
})
export class TvSeriesEpisodesComponent implements OnInit{

  tvSeriesEpisodes$: Observable<ITvSeriesSeasons | undefined>;
  id: number = this.activatedRoute.snapshot.params['id'];
  seasonNumber: number = this.activatedRoute.snapshot.params['seasonNumber'];

  constructor(private store: Store,
              private activatedRoute: ActivatedRoute) {
    this.tvSeriesEpisodes$ = this.store.select(selectTvSeriesSeason).pipe(
      tap((data) =>
      console.log(data))
    )
  }

  ngOnInit() {
     this.store.dispatch(TvSeriesSeasonActions.loadTvSeriesSeason({id: this.id, seasonNum: this.seasonNumber}))
  }

}
