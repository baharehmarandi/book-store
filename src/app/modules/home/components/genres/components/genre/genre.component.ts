import {Component, HostListener, Input, OnInit} from '@angular/core';
import {IGenres} from "../../../../../../componnets/models/genres.model";
import {Subject} from "rxjs";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  @Input() genres?: IGenres[];
  responsiveOptions: any[] | undefined;
  showNavigator: boolean = true;
  windowResize = new Subject<void>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowResize.next();
  }

  onShowGenreMovies(genre: IGenres){
    console.log(genre);
  }

  ngOnInit(): void {

    this.windowResize.subscribe(() => {
      this.showNavigator = window.innerWidth >= 592;
    })

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 2
      }
    ];
  }
}
