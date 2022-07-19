import { Component, HostBinding, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { OrderItem } from "../../models/order-item";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @HostBinding('class')
  classes: string = 'flex h-full'
  items: OrderItem[] = [];

  constructor(public cartService: CartService,
              private productService: ProductService) {
    this.getItems()
  }

  ngOnInit(): void {
    this.productService
      .load()
      .subscribe((list) => {
        this.cartService.order.addItem(list[0], 2)
        this.cartService.order.addItem(list[2], 1)
        this.getItems()
      })
  }

  private getItems(): void {
    this.items = Array.from(this.cartService.order.items.values())
  }

  onItemDeleted(): void {
    this.getItems()
  }
}
