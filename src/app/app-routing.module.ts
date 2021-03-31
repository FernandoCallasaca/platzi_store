import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importamos los componentes a los que nos dirigiremos mediante al path
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', // Cuando no haya ninguna ruta
    component: LayoutComponent, // Todos los componentes del children aplicarán este layour y cambiará dentro de su ruta cada children
    // redirectTo: '/home', // utilizamos redirección
    // pathMatch: 'full', // Cuando solo tengamos la url en seco sin ningun path
    children: [ // Children con redirectTo no pueden trabajar juntos
      {
        path: '', // Cuando no haya ninguna ruta
        redirectTo: '/home', // utilizamos redirección
        pathMatch: 'full', // Cuando solo tengamos la url en seco sin ningun path
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id', // products/1 => le enviamos un parámetro dinámico
        component: ProductDetailComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**', // Con doble * significa que no hubo match
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
