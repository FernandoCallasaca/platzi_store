import { Component, OnInit } from '@angular/core';
// Importamos nuestra interface
import { Product } from '@core/models/product.model'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
import { ProductsService } from '@core/services/products/products.service';
// Cambiamos el path en tsconfig.json "paths" por eso llamamos así
@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.css']
})
// tslint:disable-next-line:component-class-suffix
export class ProductsContainer implements OnInit {

  constructor(
    private productService: ProductsService,
  ) { }

  products: Product[];

  ngOnInit(): void {
    this.fetchProduct();
  }

  clickProduct(id: number): void {
    console.log('Product');
    console.log(id);
  }

  fetchProduct(): void {
    this.productService.getAllProducts().subscribe(products => {
        this.products = products;
      }
    );
  }
}
