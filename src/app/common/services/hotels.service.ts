import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { BASE_URL_TOKEN } from '../../config';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class HotelsService {

  private _selectedHotelSource$$: ReplaySubject<Hotel>;
  private _selectedHotel: Observable<Hotel>;

  public constructor(private http: HttpClient,
                     @Inject(BASE_URL_TOKEN) private _baseUrl: string) {
    this._selectedHotelSource$$ = new ReplaySubject<Hotel>();
    this._selectedHotel = this._selectedHotelSource$$.asObservable();
  }

  public get hotels$(): Observable<Hotel[]> {
    return this.http.get(`${this._baseUrl}/hotels`)
      .map((res: Hotel[]) => res);
  }

  public shareHotel(hotel: Hotel): void {
    this._selectedHotelSource$$.next(hotel);
  }

  public get selectedHotel(): Observable<Hotel> {
    return this._selectedHotel;
  }
}
