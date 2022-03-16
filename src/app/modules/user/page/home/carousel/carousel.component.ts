import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Navigation, Pagination, Mousewheel, Keyboard, } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class CarouselComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
