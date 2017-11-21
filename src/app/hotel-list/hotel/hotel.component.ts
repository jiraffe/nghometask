import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input()
  public hotel: Hotel;

  @Output()
  public selectedHotelEvent: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public shareSelectedHotel(hotel: Hotel): void {
    this.selectedHotelEvent.emit(this.hotel);
  }

  public ngOnInit(): void {
  }

}
