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

  getAllProducts(): Observable<Product[]> {
    // return this.http.get('http://platzi-store.herokuapp.com/products');
    // return this.http.get<Product[]>('http://platzi-store.herokuapp.com/products');
    return this.http.get<Product[]>(`${environment.urlApi}/products`);
  }

  getProduct(id: string): Observable<Product> {
    // return this.products.find(item => id === item.id);
    // return this.http.get(`http://platzi-store.herokuapp.com/products/${id}`);
    // return this.http.get<Product>(`http://platzi-store.herokuapp.com/products/${id}`);
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`);
  }
}
