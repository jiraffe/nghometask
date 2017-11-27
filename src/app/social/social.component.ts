import { Component, Input, OnInit } from '@angular/core';
import { HotelsService } from '../common/services/hotels.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public hotel: Hotel;

  public constructor(
    private _hotelService: HotelsService
  ) {}

  public ngOnInit(): void {
    this._hotelService.selectedHotel.subscribe((selectedHotel: Hotel) => this.hotel = selectedHotel);
  }

}
