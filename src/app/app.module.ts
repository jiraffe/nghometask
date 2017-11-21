import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowComponent } from './follow/follow.component';
import { DataShareComponent } from './data-share/data-share.component';
import { HotelFilterPipe } from './common/pipes/hotel-filter.pipe';
import { PhoneDirective } from './common/directives/phone.directive';
import { HotelComponent } from './hotel-list/hotel/hotel.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    WeatherComponent,
    FollowComponent,
    DataShareComponent,
    HotelFilterPipe,
    PhoneDirective,
    HotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
