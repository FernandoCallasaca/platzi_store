import { Component, OnInit } from '@angular/core';
// Para traer el id del routing para
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
      this.product = this.productService.getProduct(id);
      console.log(this.product);
    });
  }

}
