import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product-model/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from './../material/material.module';
@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
