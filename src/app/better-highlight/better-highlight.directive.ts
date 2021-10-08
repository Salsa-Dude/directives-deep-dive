import { Directive, OnInit, ElementRef, Renderer2, RendererStyleFlags2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

// The Renderer2 class is an abstraction provided by Angular in the form of a service that allows to manipulate elements of your app without having to touch the DOM directly. This is the recommended approach because it then makes it easier to develop apps that can be rendered in environments that don’t have DOM access, like on the server, in a web worker or on native mobile.

export class BetterHighlightDirective {
 
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  // Using the @HostBinding decorator a directive can link an internal property to an input property on the host element. So if the internal property changed the input property on the host element would also change.

  @HostBinding('style.backgroundColor') backgroundColor:string = 'yellow';

  // HostListener - Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs.

  @HostListener('mouseenter')mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', RendererStyleFlags2.Important)

    this.backgroundColor = "blue";
  }

  @HostListener('mouseleave')mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', RendererStyleFlags2.Important);
    this.backgroundColor = "yellow";
  }

}
