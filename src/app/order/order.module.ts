import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';

import { MaterialModule } from '@material/material.module'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
import { SharedModule } from '@shared/shared.module'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class OrderModule { }
