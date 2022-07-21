import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from "../services/cart.service";

@Injectable({
  providedIn: 'root'
})
export class SuccessGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.cartService.hasUserInfo() ? true : this.router.createUrlTree(['/']);
  }

}
