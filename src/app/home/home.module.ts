import { NgModule } from '@angular/core';

// Importamos el HomeRoutingModule
import { HomeRoutingModule } from './home-routing.module';

// Componentes del Módulo del Home
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  // Los componentes que tendrán estos módulos
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    HomeRoutingModule, // Importamos la ruta
  ]
})

export class HomeModule { }
