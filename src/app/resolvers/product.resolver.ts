import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product | undefined> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product | undefined> | Product | undefined {
    return this.productService.getById(Number(route.params['id']));
  }
}
