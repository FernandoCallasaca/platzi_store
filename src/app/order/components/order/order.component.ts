import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@core/models/product.model'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
import { CartService } from '@core/services/cart/cart.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  displayedColumns: string[] = ['image', 'title', 'price', 'count', 'actions'];

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService,
  ) {
    // Escuchar dinámicamente como va agregandose productos al carrito
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  addProduct(product: Product): void {
    this.cartService.addCart(product);
  }

  deleteProduct(product: Product): void {
    this.cartService.deleteCart(product);
  }

}
