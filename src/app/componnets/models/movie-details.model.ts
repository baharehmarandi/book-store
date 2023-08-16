export interface IMovieDetails {
  adult?: boolean,
  backdrop_path?: string,
  belongs_to_collection?: IMovieDetailsBelongsToCollection,
  budget?: number,
  genres?: IMovieDetailsGenres[],
  homepage?: string,
  id?: number,
  imdb_id?: string,
  original_language?: string,
  original_title?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  production_companies?: IMovieDetailsProductionCompanies[],
  production_countries?: IMovieDetailsProductionCountries[],
  release_date?: number,
  revenue?: number,
  runtime?: number,
  spoken_languages?: IMovieDetailsSpokenLanguages[],
  status?: string,
  tagline?: string,
  title?: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number
}

export interface IMovieDetailsBelongsToCollection {
  id?: number,
  name?: string,
  poster_path?: string,
  backdrop_path?: string
}

export interface IMovieDetailsGenres {
  id?: number,
  name?: string
}

export interface IMovieDetailsProductionCompanies {
  id?: number,
  logo_path?: string,
  name?: string,
  origin_country?: string
}

export interface IMovieDetailsProductionCountries {
  iso_3166_1?: string,
  name?: string
}

export interface IMovieDetailsSpokenLanguages {
  english_name?: string,
  iso_639_1?: string,
  name?: string
}
