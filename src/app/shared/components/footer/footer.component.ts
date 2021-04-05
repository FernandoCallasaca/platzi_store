import { Component, OnInit } from '@angular/core';
// 2. Importamos el FormControl luego de implementar ReactiveFormsModule
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor(
  ) {
    // Primer parámetro es el parámetro inicial = '' = vacío
    // Segundo es un array de validaciones
    this.emailField = new FormControl('', [
      Validators.required, // No acepta vacío
      // Validators.minLength(4), // Mínimo número de letras 4
      // Validators.maxLength(10), // Máximo número de letras 10
      Validators.email
    ]);
    // El form control tiene un valueChanges y nos suscribimos para tener el control de los cambios
    this.emailField.valueChanges.subscribe(value => {
      // console.log(value);
    });
  }

  ngOnInit(): void {
  }

  sendEmail(): void {
    if(this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
