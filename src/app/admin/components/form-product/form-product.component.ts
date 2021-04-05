import { Component, OnInit } from '@angular/core';
// FormBuilder es una extensión para crear ese grupo rápidamente
// FormGroup = grupo de controler, muchos controles
// Validators para empezar a poner las validaciones a cada FormControl dentro del FormBuilder
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service';
// Importamos para redireccionar y este es una injección de dependencia
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
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
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

}
