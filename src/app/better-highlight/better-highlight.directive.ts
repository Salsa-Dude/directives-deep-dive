import { Directive, OnInit, ElementRef, Renderer2, RendererStyleFlags2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

// The Renderer2 class is an abstraction provided by Angular in the form of a service that allows to manipulate elements of your app without having to touch the DOM directly. This is the recommended approach because it then makes it easier to develop apps that can be rendered in environments that don’t have DOM access, like on the server, in a web worker or on native mobile.

export class BetterHighlightDirective {
  flags = RendererStyleFlags2.DashCase | RendererStyleFlags2.Important;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }


  @HostListener('mouseenter')mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', RendererStyleFlags2.Important)
  }

  @HostListener('mouseleave')mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.Important);
  }

}
