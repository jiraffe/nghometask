import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-share',
  templateUrl: './data-share.component.html',
  styleUrls: ['./data-share.component.css']
})

// this should be a Service!
export class DataShareComponent implements OnInit {


  public sharedHotel: Hotel;

  @Output()
  public selectedHotelEvent: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  public ngOnInit(): void {
  }


  public recieveHotel($event: Hotel): void {
    this.sharedHotel = $event;
  }
}
