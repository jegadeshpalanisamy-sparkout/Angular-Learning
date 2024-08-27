import { AfterViewInit, Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTwinkle]',
  standalone: true
})
export class TwinkleDirective implements AfterViewInit {

  constructor(private viewRef:ViewContainerRef,private templateRef:TemplateRef<any>) { }

  ngAfterViewInit(): void {
    this.viewRef.createEmbeddedView(this.templateRef);    
  }
}
