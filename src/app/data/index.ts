import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const data: Hotel[] = [

  {
    _id: 1,
    title: 'Гостиница Версаль',
    address: {
      street: 'Светланская 10',
      city: 'Владивосток',
      country: 'Russia'
    },
    phone: '955968685',
    airTemp: 8,
    waterTemp: 1,
    followers: 29407,
    following: 934,
    previews: ['1_1', '1_2'],
    topics: ['hotel', 'fishing']
  },

  {
    _id: 2,
    title: 'DoubleTree by Hilton',
    address: {
      street: 'пр. Победителей, 9',
      city: 'Минск',
      country: 'Belarus'
    },
    phone: '295968685',
    airTemp: -8,
    waterTemp: 1,
    followers: 193475,
    following: 84875,
    previews: ['2_1', '2_2'],
    topics: ['tours']
  },

  {
    _id: 3,
    title: 'NH Madrid Balboa',
    address: {
      street: 'Núñez de Balboa, 112',
      city: 'Мадрид',
      country: 'Spain'
    },
    phone: '285968685',
    airTemp: 18,
    waterTemp: 1,
    followers: 39734,
    following: 2313,
    previews: ['3_1', '3_2'],
    topics: ['fishing', 'tours']
  }

];

export const hotels$: Observable<Hotel[]> = of(data);
