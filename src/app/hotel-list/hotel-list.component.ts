import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { hotels$ } from '../data';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  public hotels$: Observable<Hotel[]>;
  public selectedHotel: Hotel;
  public filters: string[];
  public selectedFilter: string;

  // there should be Services!
  @Output()
  public selectedHotelEvent: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public shareSelectedHotel(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.selectedHotelEvent.emit(this.selectedHotel);
  }

  public ngOnInit(): void {

    this.filters = ['hotel', 'fishing', 'tours', 'weather', 'all'];

    this.hotels$ = hotels$;
    this.hotels$.subscribe({
      next: x => {
        this.selectedHotel = x[0];
        this.selectedHotelEvent.emit(x[0]);
      }
    });
  }

  public recieveHotel($event: Hotel): void {
    this.selectedHotel = $event;
    this.selectedHotelEvent.emit($event);
  }

  public selectFilter(filter: string): void {
    this.selectedFilter = filter;
  }
}
