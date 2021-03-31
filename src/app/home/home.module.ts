import { NgModule } from '@angular/core';
// Para reconocer nuestras directivas (ngFor, ngSwitch, ngIf, [(ngModel)])
import { CommonModule } from '@angular/common';


// Importamos el HomeRoutingModule
import { HomeRoutingModule } from './home-routing.module';

// Componentes del Módulo del Home
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  // Los componentes que tendrán estos módulos
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    HomeRoutingModule, // Importamos la ruta
    CommonModule
  ]
})

export class HomeModule { }
