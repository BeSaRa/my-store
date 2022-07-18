import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProductService } from "../services/product.service";

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {

  constructor(private productService: ProductService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const productId = Number(route.params['id'])
    const badProductIdUrl = this.router.createUrlTree(['bad-product-id'])
    const productNotExists = this.router.createUrlTree(['product-not-exists'])

    return isNaN(productId) ?
      badProductIdUrl :
      this.productService.isLoaded() ?
        this.productService.isExists(productId) :
        this.productService.load().pipe(map(_ => this.productService.isExists(productId) ? true : productNotExists));
  }

}
