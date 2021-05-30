import { Component, OnInit } from '@angular/core';
// Para traer el id del routing
// Importamos un injección de dependencia y un tipado
// Toda injección de dependencia se inicializa en los parámetros del constructor
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
// Importamos el servicio -> todo servicio es una injección de dependencias
import { ProductsService } from './../../../core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  // La manera adecuada de recibir datos = ngOnInit
  ngOnInit(): void {
    // a esa ruta queremos que nos dé los parámetros que tenga en la ruta y luego no suscribimos
    // para que a medida que haya cambios me suscribo a eses cambios
    this.route.params.subscribe((params: Params) => {
      // El tipado Params es un Json que tiene la clave de acuerdo al nombre de la ruta en el routing
      const id = params.id;
      console.log(id);
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productService.getProduct(id).subscribe(product => {
        this.product = product;
      }
    );
  }

  createProduct(): void {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/pin.png',
      price: 100,
      description: 'nuevo desde angular'
    };
    this.productService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(): void {
    const newProduct: Partial<Product> = {
      price: 200,
      description: 'actualizando descripcion'
    };
    this.productService.updateProduct('222', newProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(): void {
    this.productService.deleteProduct('222').subscribe(rtpa => {
      console.log(rtpa); // true = eliminado
    });
  }
}
