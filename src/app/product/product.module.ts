import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product-model/product.component';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '@shared/shared.module'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
import { MaterialModule } from '@material/material.module'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
@NgModule({
  declarations: [
    ProductComponent,
    ProductsContainer,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ProductModule { }
