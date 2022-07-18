import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";
import { map, Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = 'data.json'
  private products: Product[] = []


  constructor(private http: HttpClient) {}

  load(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
      .pipe(map(items => items.map(item => new Product().clone(item))))
      .pipe(tap(items => this.products = items));
  }

  getById(productId: number): Product | undefined {
    return this.products.find(item => item.id === productId)
  }

  isExists(productId: number): boolean {
    return this.products.some(item => item.id === productId)
  }

  isLoaded(): boolean {
    return !!this.products.length
  }

}
