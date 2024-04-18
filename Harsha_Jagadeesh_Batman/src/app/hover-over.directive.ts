import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverOver]',
  standalone: true
})
export class HoverOverDirective {
  @HostBinding('style.textDecoration') textDecoration = 'none';
  @HostBinding('style.fontWeight') fontWeight = 'normal';

  @Input() affect: string = 'underline'; 

  @HostListener('mouseenter') onMouseEnter() {
    if (this.affect === 'underline') {
      this.textDecoration = 'underline black';
    } else if (this.affect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.affect === 'underline') {
      this.textDecoration = 'none';
    } else if (this.affect === 'bold') {
      this.el.nativeElement.style.fontWeight = 'normal';
    }
  }

  constructor(private el: ElementRef) {}
}
