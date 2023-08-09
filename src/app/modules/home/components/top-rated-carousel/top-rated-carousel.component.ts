import {Component, HostListener, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";

export interface ITopRatedImage {
  imageUrl: string;
  title: string;
  alt: string;
  link: string;
}

@Component({
  selector: 'app-top-rated-carousel',
  templateUrl: './top-rated-carousel.component.html',
  styleUrls: ['./top-rated-carousel.component.scss']
})


export class TopRatedCarouselComponent implements OnInit {

  images: ITopRatedImage[]=[];
  responsiveOptions: any[] | undefined;
  showNavigator: boolean = true;
  windowResize = new Subject<void>();

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowResize.next();
  }

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.windowResize.subscribe(() => {
      if(window.innerWidth < 592){
        this.showNavigator = false;
      } else {
        this.showNavigator = true;
      }
    })

    this.images = [
      { imageUrl: 'assets/images/top-rated-tv-series.png', title: "Top Rated TV Series", alt: "Top Rated TV Series", link: "tvSeries/top-rated" },
      { imageUrl: 'assets/images/top-rated-movie.png', title:"Top Rated Movies", alt: "Top Rated Movies", link: "movies/top-rated" },
    ]

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  onClick(item: string){
    this.router.navigate([item])
  }
}
