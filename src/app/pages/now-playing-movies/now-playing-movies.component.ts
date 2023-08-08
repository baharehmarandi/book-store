import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {IResults} from "../../componnets/models/movie.model";
import {Store} from "@ngrx/store";
import {NowPlayingMovieActions} from "../../componnets/store/movie/actions/movie.actions";
import {
  selectNowPlayingMovie,
  selectNowPlayingMovieTotal
} from "../../componnets/store/movie/selectors/nowPlaying-movie.selectors";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.scss']
})
export class NowPlayingMoviesComponent implements OnInit {
  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  NowPlayingMoviesLists$: Observable<IResults[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(NowPlayingMovieActions.loadNowPlayingMovies({page: this.page}));
    this.NowPlayingMoviesLists$ = this.store.select(selectNowPlayingMovie);
    this.total$ = this.store.select(selectNowPlayingMovieTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(NowPlayingMovieActions.loadNowPlayingMovies({page: this.page}));
  }
}
