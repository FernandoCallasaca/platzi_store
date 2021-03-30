import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Agregamos el FormsModule para utilizar el [(ngModel)]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';

// Para colocar las fechas en el idioma español
// 1.- Primero importamos LOCALE_ID del angular core
// 2.- Luego hacemos las 3 siguientes lineas importamos el idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
@NgModule({
  // En declaraciones colocamos el componente
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    // Importamos ya que es una librería
    FormsModule,
  ],
  // En este provider utilizamos el idioma local
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
