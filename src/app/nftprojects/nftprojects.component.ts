import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nftprojects',
  templateUrl: './nftprojects.component.html',
  styleUrls: ['./nftprojects.component.scss'],
})
export class NftprojectsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    pullDrag: false,
    margin: 30,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
