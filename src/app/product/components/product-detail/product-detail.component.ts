import { Component, OnInit } from '@angular/core';
// Para traer el id del routing
// Importamos un injección de dependencia y un tipado
// Toda injección de dependencia se inicializa en los parámetros del constructor
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '@core/models/product.model'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
// Importamos el servicio -> todo servicio es una injección de dependencias
import { ProductsService } from '@core/services/products/products.service';

// Traemos el servicio cartService
import { CartService } from '@core/services/cart/cart.service'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así

// Para no tener varios suscribes anidados y no se haga un callback hell
// usaremos swichmap y para eso lo tenemos que importar de los observables de rxjs
// Lo que hace es que tengo un flujo de datos o tengo un observable inicial y este
// lo remplazo por otro despues de que reciba un valor o sea manejo un flujo de datos en uno solo
// para manerjarlo en forma lineal o transformar los datos en forma lineal
// operators = manipular cualquier flujo de datos dentro del observable
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Importamos esta librería luego de instalar "npm i file-saver --save"
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // product: Product;

  // para que no me suscriba mejor lo convertimos en observable y nos suscribimos en el template
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
  ) { }

  // La manera adecuada de recibir datos = ngOnInit
  ngOnInit(): void {
    this.getRandomUsers();
    this.product$ = this.route.params
    .pipe(
      // De esta manera evitamos hacer un doble suscribe
      // switchMap El valor que emite por defecto el flujo de datos
      // Entonces luego de que nos envíe el flujo de datos(params)
      // reemplazamos el observablo al fetch del producto(return ese cambio de observable)
      // osea cambiamos se suscribe por otro
      // suscribe del "this.route.params" al "this.productService.getProduct(id)"
      switchMap((params: Params) => this.productService.getProduct(params.id))
    );
    // .subscribe((product: Product) => { // como es un observablo nos suscribimos pero es mejor suscribirnos en el template
    //   this.product = product;
    // });

    // 1. forma más clásica de hacer en ng on init

    // a esa ruta queremos que nos dé los parámetros que tenga en la ruta y luego no suscribimos
    // para que a medida que haya cambios me suscribo a eses cambios
    // this.route.params.subscribe((params: Params) => {
    //   // El tipado Params es un Json que tiene la clave de acuerdo al nombre de la ruta en el routing
    //   const id = params.id;
    //   console.log(id);
    //   this.fetchProduct(id);
    // });
  }

  // fetchProduct(id: string): void {
  //   this.productService.getProduct(id).subscribe(product => {
  //       this.product = product;
  //     }
  //   );
  // }

  addCart(product): void {
    this.cartService.addCart(product);
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

  getRandomUsers(): void {
    this.productService.getRandomUsers()
    .subscribe(
      users => {
        console.log(users);
      },
      // error => {
      //   console.error(error); // este error ya fue personalizado en el servicio
      // }
    );
  }

  getFile(): void {
    this.productService.getFile()
    .subscribe(content => {
      console.log(content); // imprimimos el contenido
      // Procedemos a descargar
      const blob = new Blob([content], {type: 'text/plain; charset=utf-8'});
      FileSaver.saveAs(blob, 'test.txt');
    });
  }
}
