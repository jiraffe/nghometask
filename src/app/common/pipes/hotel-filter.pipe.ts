import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], searchTerm: string): Hotel[] {

    if (!searchTerm || searchTerm === 'all') {
      return hotels;
    }

    return hotels
      .filter(
        (hotel: Hotel) =>
          hotel.topics.indexOf(searchTerm) !== -1
      );
  }

}
