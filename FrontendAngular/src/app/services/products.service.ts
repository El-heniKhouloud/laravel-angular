import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  base_path = 'http://localhost:8000/api/products/';
  constructor(public http:HttpClient) { }

  createProduct(item:any): Observable<Product>{
    return this.http
    .post<Product>('http://localhost:8000/api/products/add', item)
  }

  getProducts(): Observable<Product>{
    return this.http
    .get<Product>(this.base_path )
  }

  getProduct(id:any): Observable<Product>{
    return this.http
    .get<Product>('http://localhost:8000/api/products/view/' + id)
  }

  updateProduct(id:number, item:any): Observable<Product>{
    return this.http
    .put<Product>('http://localhost:8000/api/products/edit/' +id, item)
  }

  deleteProduct(id:any){
    return this.http.delete<Product>('http://localhost:8000/api/products/delete/' + id)
  }
}
