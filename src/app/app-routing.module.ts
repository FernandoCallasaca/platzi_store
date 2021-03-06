import { NgModule } from '@angular/core';
// Importamos el PreloadAllModules para que haga la precarga
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Importamos los componentes a los que nos dirigiremos mediante al path
import { LayoutComponent } from './layout/layout.component';
// Importo guardión admin
import { AdminGuard } from './shared/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '', // Cuando no haya ninguna ruta
    component: LayoutComponent, // Todos los componentes del children aplicarán este layout y cambiará dentro de su ruta cada children
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
        // component: HomeComponent -> Ya no cargará el componente home // Aquí cargamos un componente
        // Para cargar un módulo sería de la siguiente forma
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        // component: ProductsComponent,
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      // {
      //   path: 'products/:id', // products/1 => le enviamos un parámetro dinámico
      //   // component: ProductDetailComponent
      // },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  // Creamos el admin
  {
    path: 'admin',
    canActivate: [AdminGuard], // le enviamos un guardión dentro del arreglo
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**', // Con doble * significa que no hubo match
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { // Aquí agregamos un parámetro json para que precargue y no demore
    // Demora porque tiene que pedir a los archivos js
    // Aquí resolvemos escogiendo una estrategia de precarga
    // Escogemos un PreloadAllModules
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
