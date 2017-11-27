import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelsService } from '../../common/services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  public constructor(
    private _hotelsService: HotelsService
  ) { }

  @Input()
  public hotel: Hotel;

  public shareHotel(hotel: Hotel): void {
    this._hotelsService.shareHotel(hotel);
  }

}
