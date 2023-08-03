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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent
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
    StoreModule.forRoot({genres: genresReducer, movie: movieReducer} ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([GenresEffects, MovieEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
