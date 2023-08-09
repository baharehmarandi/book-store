import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {GenersComponent} from "./components/genres/geners.component";
import {TopRatedCarouselComponent} from "./components/top-rated-carousel/top-rated-carousel.component";
import {PrimeNgModule} from "../../shared/prime-ng/prime-ng.module";
import { GenreComponent } from './components/genres/components/genre/genre.component';
import { MovieItemsComponent } from './components/movie-items/movie-items.component';
import { CartComponent } from './components/movie-items/components/cart/cart.component';
import {MovieComponent} from "./components/movie-items/components/movie/movie.component";
import { TvSeriesComponent } from './components/movie-items/components/tv-series/tv-series.component';
import { TvSeriesCardComponent } from './components/movie-items/components/tv-series-card/tv-series-card.component';


@NgModule({
  declarations: [
    GenersComponent,
    TopRatedCarouselComponent,
    GenreComponent,
    MovieItemsComponent,
    CartComponent,
    MovieComponent,
    TvSeriesComponent,
    TvSeriesCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule
  ],
    exports: [
        GenersComponent,
        TopRatedCarouselComponent,
        CartComponent,
        MovieComponent,
        TvSeriesComponent,
        TvSeriesCardComponent,
    ]
})
export class HomeModule { }
