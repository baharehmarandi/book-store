import {Component, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {IResults} from "../../componnets/models/movie.model";
import {Store} from "@ngrx/store";
import {TopRatedMovieActions} from "../../componnets/store/movie/actions/movie.actions";
import {
  selectTopRatedMovie,
  selectTopRatedMovieTotal
} from "../../componnets/store/movie/selectors/topRated-movies.selectors";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent {

  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  topRatedMoviesLists$: Observable<IResults[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(TopRatedMovieActions.loadTopRatedMovies({page: this.page}));
    this.topRatedMoviesLists$ = this.store.select(selectTopRatedMovie);
    this.total$ = this.store.select(selectTopRatedMovieTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(TopRatedMovieActions.loadTopRatedMovies({page: this.page}));
  }
}
