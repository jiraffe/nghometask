import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HotelFilterPipe } from './common/pipes/hotel-filter.pipe';
import { HotelComponent } from './hotel-list/hotel/hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsService } from './common/services/hotels.service';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { HighlightDirective } from './common/directives/highlight.directive';
import { PhonePipe } from './common/pipes/phone.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    WeatherComponent,
    SocialComponent,
    HotelFilterPipe,
    HotelComponent,
    HighlightDirective,
    PhonePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HotelsService,
    { provide: BASE_URL_TOKEN, useValue: BASE_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
