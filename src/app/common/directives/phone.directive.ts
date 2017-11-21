import { Directive, ElementRef, Input, OnInit } from '@angular/core';

const codes: object = {
  'Russia': '7',
  'Belarus': '375',
  'Spain': '34'
};

@Directive({
  selector: '[appPhone]'
})

export class PhoneDirective implements OnInit {

  @Input()
  public hotel: Hotel;


  public constructor(private _elementRef: ElementRef) { }

  public ngOnInit(): void {

    const phone: string =
          codes[this.hotel.address.country]
        + '-'
        + this.hotel.phone
              .replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '($1)-$2-$3-$4');

    this._elementRef.nativeElement.innerText =
      [
        'Tel: +',
        phone
      ].join(' ');

  }

}
