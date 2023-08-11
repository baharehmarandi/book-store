import {IMovieDetails} from "../../../models/movie-details.model";

export interface MovieDetailsState {
  movieDetails?: IMovieDetails,
  loading?: boolean,
  success?: boolean,
  error?: boolean,
  id?: number
}

export const initialState: MovieDetailsState = {
  movieDetails: undefined,
  loading: undefined,

}
