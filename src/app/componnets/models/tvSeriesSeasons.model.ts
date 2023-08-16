import {ITvSeriesSeasonEpisode} from "./tvSeriesSeasonEpisods.model";

export interface ITvSeriesSeasons {
  _id?: string,
  air_date?: string,
  episodes?: ITvSeriesSeasonEpisode[],
  name?: string,
  overview?: string,
  id?: number,
  poster_path?: string,
  season_number?: number,
  vote_average?: number
}


