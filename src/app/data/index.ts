import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const data: Hotel[] = [

  {
    _id: '5a1986d4f36d280cc00dc966',
    title: 'Гостиница Версаль',
    weather: {
      airTemp: 8,
      waterTemp: 1
    },
    social: {
      followers: 29407,
      following: 934
    },
    topics: ['hotel', 'fishing' ],
    previews: [ '5a1986d4f36d280cc00dc966_1', '5a1986d4f36d280cc00dc966_2' ],
    address: {
      street: 'Светланская 10',
      city: 'Владивосток',
      country: 'Russia',
      phone: '955968685'
    }
  }
];

export const hotels$: Observable<Hotel[]> = of(data);
