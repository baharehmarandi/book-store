import {Component, Input} from '@angular/core';
import {ISearchResult} from "../../../../componnets/models/search.model";
import {imageBaseUrl} from "../../../../../environments/environment";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent{

  @Input () searchValue?: ISearchResult[]
  constructor() {}

  protected readonly imageBaseUrl = imageBaseUrl;
}
