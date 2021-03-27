import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Agregamos el FormsModule para utilizar el [(ngModel)]
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';

@NgModule({
  // En declaraciones colocamos el componente
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    // Importamos ya que es una librería
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
