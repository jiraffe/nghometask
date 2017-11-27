import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { hotels$ } from '../data';
import { HotelsService } from '../common/services/hotels.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {

  public hotels$: Observable<Hotel[]>;
  public filters: string[];
  public selectedFilter: string;
  public selectedHotel: Hotel;

  public constructor(
    private _hotelService: HotelsService
  ) {}

  public ngOnInit(): void {
    this.filters = ['hotel', 'fishing', 'tours', 'weather', 'all'];
    this.hotels$ = this._hotelService.hotels$;

    this._hotelService.selectedHotel.subscribe((selectedHotel: Hotel) => this.selectedHotel = selectedHotel);
  }

  public selectFilter(filter: string): void {
    this.selectedFilter = filter;
  }
}
