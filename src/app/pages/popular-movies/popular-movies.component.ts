import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {PopularMovieActions} from "../../componnets/store/movie/actions/movie.actions";
import {Observable} from "rxjs";
import {IResults} from "../../componnets/models/movie.model";
import {
  selectPopularMovie,
  selectPopularMovieTotal
} from "../../componnets/store/movie/selectors/popular-movies.selectors";
import {Paginator} from "primeng/paginator";

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})



export class PopularMoviesComponent implements OnInit{

  @ViewChild('paginator', {static: true})
  paginator?: Paginator;

  first: number = 0;
  rows: number = 20;
  page: number = 1;
  popularMoviesLists$: Observable<IResults[] | undefined>;
  total$: Observable<number | undefined>;

  constructor(private store: Store) {
    this.store.dispatch(PopularMovieActions.loadPopularMovies({page: this.page}));
    this.popularMoviesLists$ = this.store.select(selectPopularMovie);
    this.total$ = this.store.select(selectPopularMovieTotal);
  }

  ngOnInit(): void {
    if (this.paginator) {
      this.paginator.rows = 20;
    }
  }

  onPageChange(event: PageEvent) {
    this.page = event.page ?  (event.page + 1) : 1;
    this.store.dispatch(PopularMovieActions.loadPopularMovies({page: this.page}));
  }
}
