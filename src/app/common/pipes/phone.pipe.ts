import { Pipe, PipeTransform } from '@angular/core';

const codes: object = {
  'Russia': '7',
  'Belarus': '375',
  'Spain': '34',
  'Peru': '51'
};

@Pipe({
  name: 'phone'
})

export class PhonePipe implements PipeTransform {

  public transform(value: string, country: string): string {

    const phone: string =
      codes[country]
      + '-'
      + value
        .replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '($1)-$2-$3-$4');

    return 'Tel: +' + phone;
  }

}
