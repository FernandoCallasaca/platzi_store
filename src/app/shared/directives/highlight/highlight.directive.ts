// Utilizaremos ElementRef es el que modificar√° el comportamiento por defecto del DOM
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef,
  ) {
    // Cogemos su elemento nativo y modificaremos su comportamiento en el DOM
    element.nativeElement.style.backgroundColor = '#4ADC6E';
  }

}
