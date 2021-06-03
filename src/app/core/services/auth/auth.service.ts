import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; // Traemos importaciones nativas de firebase

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth, // angular firebase authentication = afa
  ) { }

  createUser(email: string, password: string): any {
    return this.afa.createUserWithEmailAndPassword(email, password);
  }
}
