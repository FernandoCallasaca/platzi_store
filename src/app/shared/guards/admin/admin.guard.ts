import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// Para debuger usamos tap
// tap genera una intersección en un flujo de datos y con esa intersección
// puedo hacer lo que quiera pero no me transforma nada de los datos

// map si transforma
import { map, tap } from 'rxjs/operators';

import { AuthService } from './../../../core/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasuser().pipe(
      tap(user => console.log(user)), // aquí interceptamos con un tap para ver que nos trae
      map(user => user === null ? false : true) // como debe retornar un boleano transformamos con map
    );
  }

}
