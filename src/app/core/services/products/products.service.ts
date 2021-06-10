import { Injectable } from '@angular/core';
// Aquí solo traemos el Client y no traemos el módulo "HttpClientModulo"
// Porque el módulo ya está instalado en app.module.ts y ese hace que pudamos utilizar el Client
// -- HttpErrorResponse para tipar el error http
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Product } from '@core/models/product.model'; // Cambiamos el path en tsconfig.json "paths" por eso llamamos así
// Importamos para tipar un Observable

// También importamos throwError para generar un observable de tipo error
import { Observable, throwError } from 'rxjs';

import { environment } from './../../../../environments/environment';

// Para atrapar errores importamos catchError de los operators
// para intentar a hacer la petición importamos retry
import { map, catchError, retry } from 'rxjs/operators';

interface Users {
  email: string;
  gender: string;
  phone: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(
    private http: HttpClient, // por ser una injección de dependencia
  ) { }

  // Método para devolver todos los productos
  getAllProducts(): Observable<Product[]> {
    // return this.http.get('http://platzi-store.herokuapp.com/products');
    // return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products');
    return this.http.get<Product[]>(`${environment.urlApi}/products`)
    .pipe(
      catchError(this.handleError),
    );
  }

  // Método para retornar un solo producto
  getProduct(id: string): Observable<Product> {
    // return this.products.find(item => id === item.id);
    // return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
    // return this.http.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`);
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  // Metodo para crear un producto
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${environment.urlApi}/products`, product)
    .pipe(
      catchError(this.handleError),
    );
  }

  // Editamos un productos
  updateProduct(id: string, changes: Partial<Product>): Observable<any> {
    return this.http.put(`${environment.urlApi}/products/${id}`, changes)
    .pipe(
      catchError(this.handleError),
    );
  }

  // Eliminamos un productos
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.urlApi}/products/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  // Ejemplo de tipado con interface
  getRandomUsers(): Observable<Users[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3), // antes de dar error que intente n veces
      // si no contesta con esas n veces de intentos ya sale error
      // el catch se recibe antes de procesar "siempre"
      // si no hay error no pasará por esa función
      catchError(this.handleError),
      map((response: any) => response.results as Users[])
    );
  }

  // Ejemplo para traer un file
  getFile(): Observable<any> {
    // Le decimos que el responseType es un texto
    // Si sería un pdf también le pondría el type indicado
    return this.http.get('assets/files/test.txt', { responseType: 'text' });
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    // Aquí manipulamos el error if, etc
    console.log(error); // imprimimos el error nativo que venga
    return throwError('Ups algo salió mal'); // retornamos un observablo con el error tratado personalizado
  }

}
