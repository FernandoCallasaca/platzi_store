import { Injectable } from '@angular/core';
// Aquí solo traemos el Client y no traemos el módulo "HttpClientModulo"
// Porque el módulo ya está instalado en app.module.ts y ese hace que pudamos utilizar el Client
import { HttpClient } from '@angular/common/http';

import { Product } from './../../../product.model';
// Importamos para tipar un Observable
import { Observable } from 'rxjs';

import { environment } from './../../../../environments/environment';

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
    return this.http.get<Product[]>(`${environment.urlApi}/products`);
  }

  // Método para retornar un solo producto
  getProduct(id: string): Observable<Product> {
    // return this.products.find(item => id === item.id);
    // return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
    // return this.http.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`);
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`);
  }

  // Metodo para crear un producto
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${environment.urlApi}/products`, product);
  }

  // Editamos un productos
  updateProduct(id: string, changes: Partial<Product>): Observable<any> {
    return this.http.put(`${environment.urlApi}/products/${id}`, changes);
  }

  // Eliminamos un productos
  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.urlApi}/products/${id}`);
  }
}
