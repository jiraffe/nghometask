import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

@Pipe({
  name: 'hotelFilter'
})

@Injectable()
export class HotelFilterPipe implements PipeTransform {

  public constructor(
    private _hotelsService: HotelsService
  ) { }

  public transform( hotels: Hotel[], searchTerm: string ): Hotel[] {
    if ( !hotels ) {
      return hotels;
    }

    if ( ! searchTerm || searchTerm === 'all' ) {
      this._hotelsService.shareHotel(hotels[0]);
      return hotels;
    }

    const result: Hotel[] = hotels
      .filter(
        (hotel: Hotel) =>
          hotel.topics.indexOf(searchTerm) !== -1
      );

    this._hotelsService.shareHotel(result[0]);

    return result;
  }

}
