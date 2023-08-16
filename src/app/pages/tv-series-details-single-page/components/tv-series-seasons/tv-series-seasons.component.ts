import {Component, Input} from '@angular/core';
import {ITvSeriesDetailsSeasons} from "../../../../componnets/models/tvSeries-details.model";
import {imageBaseUrl} from "../../../../../environments/environment";

@Component({
  selector: 'app-tv-series-seasons',
  templateUrl: './tv-series-seasons.component.html',
  styleUrls: ['./tv-series-seasons.component.scss']
})
export class TvSeriesSeasonsComponent{
  @Input() seasons?: ITvSeriesDetailsSeasons[];
  @Input() seriesId?: number;
  protected readonly imageBaseUrl = imageBaseUrl;
  protected readonly onmouseenter = onmouseenter;

}
