import {Component, OnInit, ViewChild} from '@angular/core';
import {Paginator} from "primeng/paginator";
import {Observable} from "rxjs";
import {IResults} from "../../componnets/models/movie.model";
import {Store} from "@ngrx/store";
import {UpComingMovieActions} from "../../componnets/store/movie/actions/movie.actions";
import {
  selectUpComingMovie,
  selectUpComingMovieTotal
} from "../../componnets/store/movie/selectors/upComing-movie.selectors";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-up-coming-movies',
  templateUrl: './up-coming-movies.component.html',
  styleUrls: ['./up-coming-movies.component.scss']
})
export class UpComingMoviesComponent implements OnInit {

  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  upComingMoviesLists$: Observable<IResults[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(UpComingMovieActions.loadUpComingMovies({page: this.page}));
    this.upComingMoviesLists$ = this.store.select(selectUpComingMovie);
    this.total$ = this.store.select(selectUpComingMovieTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(UpComingMovieActions.loadUpComingMovies({page: this.page}));
  }
}
