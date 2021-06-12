import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Agregamos el FormsModule para utilizar el [(ngModel)]
import { FormsModule } from '@angular/forms';
// Con esto nuestra aplicación tiene el potencial de hacer peticiones http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Para colocar las fechas en el idioma español
// 1.- Primero importamos LOCALE_ID del angular core
// 2.- Luego hacemos las 3 siguientes lineas importamos el idioma
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { LayoutComponent } from './layout/layout.component';
// Importamos las librerías
import { SharedModule } from '@shared/shared.module'; // el módulo de todos los compartidos
// Cambiamos el path en tsconfig.json "paths" por eso llamamos así
import { CoreModule } from '@core/core.module'; // el Core donde están nuestros servicios
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Agregamos la configuración de firebase previamente copiando en los enviorements la conf de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';  // Módulo authentication de firebase
import { AngularFireStorageModule } from '@angular/fire/storage';  // Módulo storage de firebase
import { environment } from '../environments/environment';

// Agregaremos nuestro interceptor para todos las consultas o peticiones
// HTTP_INTERCEPTORS: variable constante que ellos tienen para interceptores
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Importamos nuestro interceptor para colocarlo en el useClass de provide
import { AuthInterceptor } from '@core/services/interceptors/auth/auth.interceptor';

@NgModule({
  // En declaraciones, pipes, directivas colocamos el componente
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Importamos ya que es una librería
    FormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // Configuración de firebase
    AngularFireAuthModule, // Módulo authentication de firebase
    AngularFireStorageModule // Módulo storage de firebase
  ],
  providers: [
    // En este provider utilizamos el idioma local
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    // Creamos un nuevo provide para nuestro interceptor
    {
      provide: HTTP_INTERCEPTORS, // provide por defecto de angular
      useClass: AuthInterceptor, // esa clase utilizamos(nuestro interceptor creado)
      multi: true // con "true" le decimos que a cualquier petición se aplique nuestro interceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
