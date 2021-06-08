import { Injectable } from '@angular/core';

// La librería que añade principios reactivos a nuestra aplicación de angular es rxjs
import { BehaviorSubject } from 'rxjs';

import { Product } from '@core/models/product.model'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  // cart es una instancia de BehaviorSubject y es de tipo array de productos y inicializamos en un array vacío
  private cart = new BehaviorSubject<Product[]>([]);

  // Creamos una variable pública para que pueda ser preguntada por cualquier componente
  // y que sea de tipo observable para que cualquiera que se suscriba a el va a notar sus
  // cambios en tiempo real
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product): void {
    // Practica de no mutación( o sea no utilizar push )
    // O sea cada vez voy a crear una nueva referencia del arreglo
    // para no teneer problemas de inmutabilidad
    // Simplemente creamos un nuevo estado del arreglo
    this.products = [...this.products, product];
    // Para notificar a todos los componentes que están suscritos
    // que hubo un cambio y eso lo hago con "next"
    // y le enviaría el array actual(la copia)
    this.cart.next(this.products);
  }

  deleteCart(product: Product): void {
    const indice = this.products.findIndex(p => p.id === product.id); // sacamos el indice
    this.products.splice(indice, 1); // Con esto ya eliminamos
    this.products = [...this.products]; // Con esto actualizamos la tabla
    this.cart.next(this.products); // Notificamos que hubo un cambio y le enviamos el array actual
  }
}
