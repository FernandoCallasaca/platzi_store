import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string): void {
    // una forma de guardar el token es en el localStorage
    // la mejor forma de guardarlo es el cookies
    localStorage.setItem('token', token);
  }

  getToken(): string {
    // de esta forma sacamos el token del localStorage
    return localStorage.getItem('token');
  }
}
