import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGenresResponse} from "../../componnets/models/genres.model";
import {apiBaseUrl, token} from "../../../environments/environment";
import {Observable} from "rxjs";
import {IMovie} from "../../componnets/models/movie.model";
import {ITvSeries} from "../../componnets/models/tv-series.model";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getGenres(type: string): Observable<IGenresResponse>{
    return this.http.get<IGenresResponse>(`${apiBaseUrl}/genre/${type}/list`, {
      headers:{
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getMoviesList(movieType: string, page = 1): Observable<IMovie>{
    return this.http.get<IMovie>(`${apiBaseUrl}/movie/${movieType}?page=${page}`,{
      headers:{
        'Authorization': 'Bearer ' + token
      }
    })
  }

  getTvSeriesList(tvSeriesType: string, page = 1): Observable<ITvSeries>{
    return this.http.get<ITvSeries>(`${apiBaseUrl}/tv/${tvSeriesType}?page=${page}`, {
      headers:{
        'Authorization': 'Bearer ' + token
      }
    })
  }
}
