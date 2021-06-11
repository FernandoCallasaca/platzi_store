import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; // Traemos importaciones nativas de firebase
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

// Aquí tenemos el ejemplo de que un servicio utilice otro serivicio
// importamos el servicio de token
import { TokenService } from './../token/token.service';
// tap no facilita ejecutar una tarea antes de devolverla como tal al componente
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth, // angular firebase authentication = afa
    private http: HttpClient,
    private token: TokenService,
  ) { }

  createUser(email: string, password: string): Promise<any> {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  // Este se comunica con firebase
  login(email: string, password: string): Promise<any> {
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<any> {
    return this.afa.signOut();
  }

  hasuser(): Observable<any> {
    return this.afa.authState;
  }

  // Este se comunicará con nuestro endpoint de autenticación
  loginRestApi(email: string, password: string): Observable<any> {
    // Por lo general cualquier tipo de autenticación va por "post"
    return this.http.post('https://platzi-store.herokuapp.com/auth', {
      // De por sí cuando tenemos una conexión https los datos ya viajan encriptados
      // Es buena práctica enviar estos datos sensibles también encriptados
      email,
      password
    }) // este nos devuelve el token
    .pipe(
      // intercetamos el resultado
      tap((data: {token: string}) => {
        const token = data.token;
        // el token obtenido lo guardamos el localStorage mediante el servicio
        // para pedirlo en cualquier momento
        this.token.saveToken(token);
      })
    );
  }
}
