import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set appUnless(condition: boolean) {
    if (condition) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }
}
