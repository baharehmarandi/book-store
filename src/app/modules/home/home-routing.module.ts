import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopRatedMoviesComponent} from "../../pages/top-rated-movies/top-rated-movies.component";
import {PopularMoviesComponent} from "../../pages/popular-movies/popular-movies.component";
import {UpComingMoviesComponent} from "../../pages/up-coming-movies/up-coming-movies.component";
import {NowPlayingMoviesComponent} from "../../pages/now-playing-movies/now-playing-movies.component";
import {HomePageComponent} from "../../pages/home-page/home-page.component";
import {TopRatedTvSeriesComponent} from "../../pages/top-rated-tv-series/top-rated-tv-series.component";
import {PopularTvSeriesComponent} from "../../pages/popular-tv-series/popular-tv-series.component";
import {OnTheAirTvSeriesComponent} from "../../pages/on-the-air-tv-series/on-the-air-tv-series.component";
import {AiringTodayTvSeriesComponent} from "../../pages/airing-today-tv-series/airing-today-tv-series.component";

const routes: Routes = [
  {path: 'movies/top-rated', component: TopRatedMoviesComponent},
  {path: 'movies/popular', component: PopularMoviesComponent},
  {path: 'movies/upComing', component: UpComingMoviesComponent},
  {path: 'movies/nowPlaying', component: NowPlayingMoviesComponent},
  {path: 'tvSeries/top-rated', component: TopRatedTvSeriesComponent},
  {path: 'tvSeries/popular', component: PopularTvSeriesComponent},
  {path: 'tvSeries/onTheAir', component: OnTheAirTvSeriesComponent},
  {path: 'tvSeries/airingToday', component: AiringTodayTvSeriesComponent},
  {path: '', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
