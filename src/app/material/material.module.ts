import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos los módulos desde la API de angular material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

const importsApi = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule
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
