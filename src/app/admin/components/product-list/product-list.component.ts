import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe(rpta => {
      console.log(rpta);
      // this.fetchProducts();
      if (rpta) {
        const indice = this.products.findIndex(product => product.id === id); // sacamos el indice
        this.products.splice(indice, 1); // Con esto ya eliminamos
        this.products = [...this.products]; // Con esto actualizamos la tabla
      }
    });
  }
}
