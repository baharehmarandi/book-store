import {Component, Input, OnInit} from '@angular/core';
import {IGenres} from "../../../../../../componnets/models/genres.model";
import {Store} from "@ngrx/store";
import {selectMovieGenres} from "../../../../../../componnets/store/genres/selectores/movie-genres.selectors";
import {ITvSeriesResult} from "../../../../../../componnets/models/tv-series.model";
import {imageBaseUrl} from "../../../../../../../environments/environment";

@Component({
  selector: 'app-tv-series-card',
  templateUrl: './tv-series-card.component.html',
  styleUrls: ['./tv-series-card.component.scss']
})
export class TvSeriesCardComponent implements OnInit {
  @Input() tvSeries?: ITvSeriesResult;
  // protected readonly imageBaseUrl = imageBaseUrl;
  showMovieDescription: boolean = false;
  genreList: IGenres[] = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.select(selectMovieGenres).subscribe(genres => this.genreList = genres ?? []);
  }

  onHideTitle(){
    this.showMovieDescription = true;
  }

  onShowTitle(){
    this.showMovieDescription = false;
  }

  translateGenre(genreIds: number[]){
    return this.genreList.filter(genre => genreIds.includes(genre.id)).map(genre => genre.name);
  }

  protected readonly imageBaseUrl = imageBaseUrl;
}
