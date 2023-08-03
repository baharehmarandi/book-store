import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {MovieGenresActions, TvGenresActions} from "../../componnets/store/genres/actions/genres.actions";
import {
  NowPlayingMovieActions,
  PopularMovieActions,
  UpComingMovieActions
} from "../../componnets/store/movie/actions/movie.actions";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
 constructor(private store: Store) {
   this.store.dispatch(TvGenresActions.loadTvGenres());
   this.store.dispatch(MovieGenresActions.loadMovieGenres());
   this.store.dispatch(PopularMovieActions.loadPopularMovies());
   this.store.dispatch(NowPlayingMovieActions.loadNowPlayingMovies());
   this.store.dispatch(UpComingMovieActions.loadUpComingMovies());
 }
}
