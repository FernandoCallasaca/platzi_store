import { Component, OnInit } from '@angular/core';
// FormBuilder es una extensión para crear ese grupo rápidamente
// FormGroup = grupo de controler, muchos controles
// Validators para empezar a poner las validaciones a cada FormControl dentro del FormBuilder
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';
// Importamos para redireccionar y este es una injección de dependencia
import { Router } from '@angular/router';
// Importamos a nuestro validators creado personalizado
import { MyValidators } from './../../../utils/validators';

// Importamos un módulo que permite subir archivos luego de implementar ya su modulo AngularFireStorageModulo
// en el "app.modute.ts" luego de instalar firebase de angular
import { AngularFireStorage } from '@angular/fire/storage';
// Llamamos al operador finalize para que nos notifique cuando finalice un proceso
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    // Como el builForm es una contrucción lo llamamos en el constructor
    // no podemos llmar en el ngOnInit porque eso es para llamar datos
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  private buildForm(): void {
    // El form builder nos dice que podemos crear un grupo
    // de formControls basados en un Json
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      // Traemos nuestro validador creado con un metodo "isPriceValid"
      // Este método tiene que estar en estático para que aparezca luego de
      // Instanciar a nuestro validador "MyValidators"
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  // Cargar imágenes
  uploadFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    // console.log(file);
    const name = 'image.png'; // El nombre de la imagen
    const fileRef = this.storage.ref(name); // decir que referencia tiene ese archivo
    // Ahora creamos una tarea para subirla
    const task = this.storage.upload(name, file);

    // La tarea es un observable que puede demorar si la imagen pesa mucho
    task.snapshotChanges()
    .pipe( // como es un observable podemos usar pipe
      // Decir que cuando nos notifique que finalice ese proceso obtendré la URL que al final
      // podré utilizar
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

  // Nativo de TypeScript y Javascript
  // Get set -> get devuelve un valor
  get priceField(): any {
    return this.form.get('price');
  }
}
