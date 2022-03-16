import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {PricingCardComponent} from './pricing-card/pricing-card.component';
import {CarouselComponent} from './carousel/carousel.component';
import {SwiperModule} from 'swiper/angular';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [PricingCardComponent, CarouselComponent, ServiceComponent],
  imports: [CommonModule, SwiperModule],
  bootstrap: [HomeComponent],
    exports: [
        PricingCardComponent,
        CarouselComponent,
        ServiceComponent,
    ]
})
export class HomeModule {
}
