import { Component, OnInit } from '@angular/core';
// FormBuilder es una extensión para crear ese grupo rápidamente
// FormGroup = grupo de controler, muchos controles
// Validators para empezar a poner las validaciones a cada FormControl dentro del FormBuilder
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // Como el builForm es una contrucción lo llamamos en el constructor
    // no podemos llmar en el ngOnInit porque eso es para llamar datos
    this.buildForm();
  }

  ngOnInit(): void {
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
