// Angular necesita de decoradores, ellos dán un contexto a los artefactos(elementos) de angular
// Un decorador es la manera en la que angular puede saber esta clase que tipo de rol va a cumplir
import { Component, Input, Output, EventEmitter } from '@angular/core'; // Llamamos al decorador component y al input
import { Product } from './../product.model';

// Los decoradores se utilizan antes de definir la clase y se definen con un @
// Los componentes tienen metadata
@Component({
  selector: 'app-product', // para llamarlo en una aplicación como un tag más de html
  templateUrl: './product.component.html', // referencia a que archivo html o a qué está enlazado

})
// Creamos nuestra clase
// Le ponemos export para que cualquier elemento en angular pueda utilizar esta clase
export class ProductComponent{

  // Ahora este componente va a recibir una propiedad de otro componente
  @Input() product: Product;
  // El Output viene con EventEmitter Así que ambos los importamos del @angular/core
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); // Siempre tenemos que inicializar

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id); // Emitimos un valor en este caso any
  }
}
