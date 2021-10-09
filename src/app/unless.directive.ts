import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // TemplateRef - Represents an embedded template that can be used to instantiate embedded views. To instantiate embedded views based on a template, use the ViewContainerRef method createEmbeddedView().

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 

  }

}
