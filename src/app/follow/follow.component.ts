import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  @Input()
  public hotel: Hotel;

  public ngOnInit(): void {
  }

}
