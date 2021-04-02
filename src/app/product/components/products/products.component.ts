import { Component, OnInit } from '@angular/core';
// Importamos nuestra interface
import { Product } from './../../../product.model';
import { ProductsService } from './../../../core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
