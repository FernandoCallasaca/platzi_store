import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// Importando formularios reactivos
// Tenemos control total, observables para ver qué datos están cambiando
// Podemos colocar mejores validaciones
// 1.- Primero importamos ReactiveFormModule
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from '@material/material.module'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
import { GroupbyPipe } from './pipes/groupby/groupby.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    ExponentialPipe,
    GroupbyPipe,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe,
    GroupbyPipe,
    CartComponent
  ]
})
export class SharedModule { }
