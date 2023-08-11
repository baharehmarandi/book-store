import {Component, Input, OnInit} from '@angular/core';
import {IResults} from "../../../../../../componnets/models/movie.model";
import {imageBaseUrl} from "../../../../../../../environments/environment";
import {IGenres} from "../../../../../../componnets/models/genres.model";
import {Store} from "@ngrx/store";
import {selectMovieGenres} from "../../../../../../componnets/store/genres/selectores/movie-genres.selectors";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() movie?: IResults;
  protected readonly imageBaseUrl = imageBaseUrl;
  showMovieDescription: boolean = false;
  genreList: IGenres[] = [];
  noImage: string = '/assets/images/no-image.jpeg'

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

}
