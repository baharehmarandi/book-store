import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IGenres} from "../../../../componnets/models/genres.model";
import {selectTvGenres} from "../../../../componnets/store/genres/selectores/tv-genres.selectors";
import {selectMovieGenres} from "../../../../componnets/store/genres/selectores/movie-genres.selectors";
import {MovieGenresActions, TvGenresActions} from "../../../../componnets/store/genres/actions/genres.actions";

@Component({
  selector: 'app-genres',
  templateUrl: './geners.component.html',
  styleUrls: ['./geners.component.scss']
})

export class GenersComponent implements OnInit {

  activeTab: number = 0
  tvGenres$: Observable<IGenres[] | undefined>;
  movieGenres$: Observable<IGenres[] | undefined>;

  constructor(private store: Store) {
    this.tvGenres$ = this.store.select(selectTvGenres);
    this.movieGenres$ = this.store.select(selectMovieGenres);
  }

  ngOnInit(): void{
    this.store.dispatch(MovieGenresActions.loadMovieGenres());
    this.store.dispatch(TvGenresActions.loadTvGenres());
  }
}
