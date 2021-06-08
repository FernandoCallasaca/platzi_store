import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// Importamos el operador map
// el map se utiliza para transformar
// Y eso es lo que queremos hacer
// Queremos transformar el valor que nos llega por uno nuevo
import { map } from 'rxjs/operators';

import { CartService } from '@core/services/cart/cart.service'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // total$ será un observablo que su valor sea un número
  // Eso hacemos para que en el template angular se suscriba automáticamente con async
  total$: Observable<number>;

  constructor(
    private cartService: CartService,
  ) {
    // Haremos una escucha al observable

    // this.cartService.cart$.subscribe(products => {
    //   console.log(products);
    //   this.total = products.length;
    // });

    this.total$ = this.cartService.cart$
    .pipe( // Agregamos la instrucción pipe
      map(products => products.length) // agregamos el pipe map - obtendrá los productos y a qué lo queremos transformar
    );
  }

  ngOnInit(): void {
  }

}
