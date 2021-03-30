import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Agregamos el FormsModule para utilizar el [(ngModel)]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';

// Para colocar las fechas en el idioma español
// 1.- Primero importamos LOCALE_ID del angular core
// 2.- Luego hacemos las 3 siguientes lineas importamos el idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  // En declaraciones, pipes, directivas colocamos el componente
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos ya que es una librería
    FormsModule,
  ],
  // En este provider utilizamos el idioma local
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
