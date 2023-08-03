import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {GenersComponent} from "./components/genres/geners.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {TopRatedCarouselComponent} from "./components/top-rated-carousel/top-rated-carousel.component";
import {PrimeNgModule} from "../../shared/prime-ng/prime-ng.module";
import { GenreComponent } from './components/genres/components/genre/genre.component';
import { MovieItemsComponent } from './components/movie-items/movie-items.component';
import { CartComponent } from './components/movie-items/components/cart/cart.component';


@NgModule({
  declarations: [
    GenersComponent,
    SideBarComponent,
    TopRatedCarouselComponent,
    GenreComponent,
    MovieItemsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PrimeNgModule
  ],
    exports: [
        GenersComponent,
        SideBarComponent,
        TopRatedCarouselComponent,
        CartComponent,
    ]
})
export class HomeModule { }
