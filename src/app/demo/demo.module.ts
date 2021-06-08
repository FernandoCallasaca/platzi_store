import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // para correr el [(ngModel)]

import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';

import { SharedModule } from '@shared/shared.module'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class DemoModule { }
