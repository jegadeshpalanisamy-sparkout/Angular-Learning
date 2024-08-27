import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true
})
export class AppHighlightDirective {
  @Input('appAppHighlight') highlightColor: string='';
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || 'yellow'); // Default to yellow if no color is provided

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color; 
  }
}
