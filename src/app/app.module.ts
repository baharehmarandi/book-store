import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import {PrimeNgModule} from "./shared/prime-ng/prime-ng.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TagModule} from "primeng/tag";
import {NgOptimizedImage} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {genresReducer} from "./componnets/store/genres/reducers/genres.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HomeModule} from "./modules/home/home.module";
import {EffectsModule} from "@ngrx/effects";
import {GenresEffects} from "./componnets/store/genres/effects/genres.effects";
import {HttpClientModule} from "@angular/common/http";
import {MovieEffects} from "./componnets/store/movie/effects/movie.effects";
import {movieReducer} from "./componnets/store/movie/reducers/movie.reducers";
import {tvSeriesReducer} from "./componnets/store/tv-series/reducers/tvSeries.reducers";
import {TvSeriesEffects} from "./componnets/store/tv-series/effects/tvSeries.effects";
import { FooterComponent } from './shared/footer/footer.component';
import { PopularMoviesComponent } from './pages/popular-movies/popular-movies.component';
import { UpComingMoviesComponent } from './pages/up-coming-movies/up-coming-movies.component';
import { NowPlayingMoviesComponent } from './pages/now-playing-movies/now-playing-movies.component';
import {TopRatedMoviesComponent} from "./pages/top-rated-movies/top-rated-movies.component";
import {SliderModule} from "primeng/slider";
import { OnTheAirTvSeriesComponent } from './pages/on-the-air-tv-series/on-the-air-tv-series.component';
import { PopularTvSeriesComponent } from './pages/popular-tv-series/popular-tv-series.component';
import { AiringTodayTvSeriesComponent } from './pages/airing-today-tv-series/airing-today-tv-series.component';
import { TopRatedTvSeriesComponent } from './pages/top-rated-tv-series/top-rated-tv-series.component';
import { MovieDetailsSinglePageComponent } from './pages/movie-details-single-page/movie-details-single-page.component';
import {NumToTimesPipe} from "./shared/num-to-times.pipe";
import { TvSeriesDetailsSinglePageComponent } from './pages/tv-series-details-single-page/tv-series-details-single-page.component';
import {TvSeriesSeasonsComponent} from "./pages/tv-series-details-single-page/components/tv-series-seasons/tv-series-seasons.component";
import { TvSeriesEpisodesComponent } from './pages/tv-series-details-single-page/components/tv-series-episodes/tv-series-episodes.component';
import {PopupComponent} from "./shared/header/components/popup/popup.component";
import {searchReducer} from "./componnets/store/search/reducers/search.reducer";
import {SearchEffect} from "./componnets/store/search/effects/search.effect";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    PopularMoviesComponent,
    UpComingMoviesComponent,
    NowPlayingMoviesComponent,
    TopRatedMoviesComponent,
    OnTheAirTvSeriesComponent,
    PopularTvSeriesComponent,
    AiringTodayTvSeriesComponent,
    TopRatedTvSeriesComponent,
    MovieDetailsSinglePageComponent,
    NumToTimesPipe,
    TvSeriesDetailsSinglePageComponent,
    TvSeriesSeasonsComponent,
    TvSeriesEpisodesComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    PrimeNgModule,
    TagModule,
    NgOptimizedImage,
    HomeModule,
    StoreModule.forRoot({genres: genresReducer, movie: movieReducer, tvSeries: tvSeriesReducer, search: searchReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([GenresEffects, MovieEffects, TvSeriesEffects, SearchEffect]),
    HttpClientModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
