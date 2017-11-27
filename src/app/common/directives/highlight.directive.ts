import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  public constructor(private _el: ElementRef) { }

  @HostListener('mouseenter')
  public enableHighlight(): void {
    this.highlight('#eee');
  }

  @HostListener('mouseleave')
  public disableHighlight(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this._el.nativeElement.style.backgroundColor = color;
  }
}
