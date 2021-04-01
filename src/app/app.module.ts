import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Agregamos el FormsModule para utilizar el [(ngModel)]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';

// Para colocar las fechas en el idioma español
// 1.- Primero importamos LOCALE_ID del angular core
// 2.- Luego hacemos las 3 siguientes lineas importamos el idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { DemoComponent } from './demo/demo.component';
import { LayoutComponent } from './layout/layout.component';
// Importamos las librerías
import { SharedModule } from './shared/shared.module'; // el módulo de todos los compartidos
import { CoreModule } from './core/core.module'; // el Core donde están nuestros servicios

@NgModule({
  // En declaraciones, pipes, directivas colocamos el componente
  declarations: [
    AppComponent,
    CartComponent,
    DemoComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos ya que es una librería
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  // En este provider utilizamos el idioma local
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
