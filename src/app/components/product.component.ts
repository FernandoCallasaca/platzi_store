// Angular necesita de decoradores, ellos dán un contexto a los artefactos(elementos) de angular
// Un decorador es la manera en la que angular puede saber esta clase que tipo de rol va a cumplir
import { Component,
  Input,
  Output, EventEmitter, SimpleChanges, OnDestroy, OnChanges, OnInit} from '@angular/core'; // Llamamos al decorador component y al input
import { Product } from './../product.model';

// Los decoradores se utilizan antes de definir la clase y se definen con un @
// Los componentes tienen metadata
@Component({
  selector: 'app-product', // para llamarlo en una aplicación como un tag más de html
  templateUrl: './product.component.html', // referencia a que archivo html o a qué está enlazado
  styleUrls: ['./product.component.css']
})
// Creamos nuestra clase
// Le ponemos export para que cualquier elemento en angular pueda utilizar esta clase
export class ProductComponent implements OnDestroy, OnChanges, OnInit {

  // Ahora este componente va a recibir una propiedad de otro componente
  @Input() product: Product;
  // El Output viene con EventEmitter Así que ambos los importamos del @angular/core
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); // Siempre tenemos que inicializar

  today = new Date();

  constructor(){
    console.log('1. Constructor');
  }

  // Importamos SimpleChanges para ver cada cambio
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges');
    console.log(changes);
  }

  // En este método debemos llamar a los servicios de datos, Rest Api
  ngOnInit(): void{
    console.log('3. ngOnInit');
  }

  // Cambios a tu manera
  // ngDoCheck() {
  //   console.log('4. ngDoCheck');
  // }

  // Para desescribirnos de datos y así eliminamos bubles de memoria
  // Ya que se estaría removiendo la interface
  ngOnDestroy(): void{
    console.log('5.- ngOnDestroy');
  }

  addCart(): void {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id); // Emitimos un valor en este caso any
  }
}
