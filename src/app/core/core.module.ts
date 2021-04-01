import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // De este modo solo le importamos en el app module
  // y quedará en el core son una sola referencia sin tener que importarlo para siempre
  providers: [
    ProductsService,
  ]
})
export class CoreModule { }
