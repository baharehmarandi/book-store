import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details-single-page',
  templateUrl: './movie-details-single-page.component.html',
  styleUrls: ['./movie-details-single-page.component.scss']
})
export class MovieDetailsSinglePageComponent implements OnInit {

  id:number = 0;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)
  }
}
