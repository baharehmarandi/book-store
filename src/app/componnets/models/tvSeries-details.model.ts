export interface ITvSeriesDetails{
  adult?: boolean,
  backdrop_path?: string,
  created_by?: string[],
  episode_run_time?: number[],
  first_air_date?: string,
  genres?: ITvSeriesDetailsGenres[],
  homepage?: string,
  id?: number,
  in_production?: boolean,
  languages?: string[],
  last_air_date?: string,
  last_episode_to_air?: ITvSeriesDetailsLastEpisodeToAir,
  name?: string,
  next_episode_to_air?: ITvSeriesDetailsNextEpisodeToAir,
  networks?: ITvSeriesDetailsNetworks[],
  number_of_episodes?: number,
  number_of_seasons?: number,
  origin_country?: string[],
  original_language?: string,
  original_name?: string,
  overview?: string,
  popularity?: number,
  poster_path?: string,
  production_companies?: ITvSeriesDetailsProductionCompanies[],
  production_countries?: ITvSeriesDetailsProductionCountries[],
  seasons?: ITvSeriesDetailsSeasons[],
  spoken_languages?: ITvSeriesDetailsSpokenLanguages[],
  status?: string,
  tagline?: string,
  type?: string,
  vote_average?: number,
  vote_count?: number
}

export interface ITvSeriesDetailsGenres {
  id?: number,
  name?: string
}

export interface ITvSeriesDetailsLastEpisodeToAir {
  id?: number,
  name?: string,
  overview?: string,
  vote_average?: number,
  vote_count?: number,
  air_date?: string,
  episode_number?: number,
  episode_type?: string,
  production_code?: string,
  runtime?: number,
  season_number?: number,
  show_id?: number,
  still_path?: number
}

export interface ITvSeriesDetailsNextEpisodeToAir {
  id?: number,
  name?: string,
  overview?: string,
  vote_average?: number,
  vote_count?: number,
  air_date?: string,
  episode_number?: number,
  episode_type?: string,
  production_code?: string,
  runtime?: number,
  season_number?: number,
  show_id?: number,
  still_path?: string
}

export interface ITvSeriesDetailsNetworks{
  id?: number,
  logo_path?: string,
  name?: string,
  origin_country?: string
}

export interface ITvSeriesDetailsProductionCompanies {
  id?: number,
  logo_path?: string,
  name?: string,
  origin_country?: string
}

export interface ITvSeriesDetailsProductionCountries {
  so_3166_1?: string,
  name?: string
}

export interface ITvSeriesDetailsSeasons {
  air_date?: string,
  episode_count?: number,
  id?: number,
  name?: string,
  overview?: string,
  poster_path?: string,
  season_number?: number,
  vote_average?: number
}

export interface ITvSeriesDetailsSpokenLanguages {
  english_name?: string,
  iso_639_1?: string,
  name?: string
}
