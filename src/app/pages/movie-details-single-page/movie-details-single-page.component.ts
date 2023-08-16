import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {MovieDetailsActions} from "../../componnets/store/movie/actions/movie.actions";
import {Observable, tap} from "rxjs";
import {IMovieDetails} from "../../componnets/models/movie-details.model";
import {selectDetailsMovie} from "../../componnets/store/movie/selectors/details-movies.selectors";
import {imageBaseUrl} from "../../../environments/environment";

@Component({
  selector: 'app-movie-details-single-page',
  templateUrl: './movie-details-single-page.component.html',
  styleUrls: ['./movie-details-single-page.component.scss']
})
export class MovieDetailsSinglePageComponent implements OnInit {

  id:number = this.activatedRoute.snapshot.params['id'];
  movieDetails$: Observable<IMovieDetails | undefined>;
  value?: number;

  constructor(private activatedRoute: ActivatedRoute,
              private store: Store) {
    this.movieDetails$ = this.store.select(selectDetailsMovie).pipe(
      tap((data) =>
        this.value = data?.vote_average
      )
    );
  }

  ngOnInit() {
    this.store.dispatch(MovieDetailsActions.loadMovieDetails({id : this.id}));
  }

  protected readonly imageBaseUrl = imageBaseUrl;
}
