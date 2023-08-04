import {Component, HostListener, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import {IResults} from "../../../../../../componnets/models/movie.model";
import {selectPopularMovie} from "../../../../../../componnets/store/movie/selectors/popular-movies.selectors";
import {selectNowPlayingMovie} from "../../../../../../componnets/store/movie/selectors/nowPlaying-movie.selectors";
import {selectUpComingMovie} from "../../../../../../componnets/store/movie/selectors/upComing-movie.selectors";
import {
  NowPlayingMovieActions,
  PopularMovieActions, UpComingMovieActions
} from "../../../../../../componnets/store/movie/actions/movie.actions";

export interface IMovieLists {
  name: string;
}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  popularMovie$: Observable<IResults[] | undefined>;
  nowPlayingMovie$: Observable<IResults[] | undefined>;
  upComingMovie$: Observable<IResults[] | undefined>;
  responsiveOptions: any[] | undefined;
  movieLists: IMovieLists[] = [];
  showNavigator: boolean = true;
  windowResize = new Subject<void>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowResize.next();
  }

  constructor(private store: Store) {
    this.popularMovie$ = this.store.select(selectPopularMovie);
    this.nowPlayingMovie$ = this.store.select(selectNowPlayingMovie);
    this.upComingMovie$ = this.store.select(selectUpComingMovie);
  }

  ngOnInit(): void {

    this.windowResize.subscribe(() => {
      this.showNavigator = window.innerWidth >= 592;
    })

    this.movieLists = [
      {name: 'Popular movies'},
      {name: 'Now playing movies'},
      {name: 'Upcoming movies'}
    ];

    this.store.dispatch(PopularMovieActions.loadPopularMovies());
    this.store.dispatch(NowPlayingMovieActions.loadNowPlayingMovies());
    this.store.dispatch(UpComingMovieActions.loadUpComingMovies());

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
