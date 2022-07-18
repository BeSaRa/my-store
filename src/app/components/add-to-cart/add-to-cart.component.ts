import { Component, Input } from '@angular/core';
import { Product } from "../../models/product";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {
  @Input()
  product!: Product
  @Input()
  center: boolean = false;
  quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedQuantity: number = 1;

  constructor(private cartService: CartService) { }


  addToCart(): void {
    this.cartService.order.addItem(this.product, this.selectedQuantity)
  }

}
