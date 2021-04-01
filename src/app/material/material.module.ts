import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los módulos desde la API de angular material
import { MatButtonModule } from '@angular/material/button';

const importsApi = [
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    importsApi
  ],
  exports: [
    importsApi
  ]
})
export class MaterialModule { }
