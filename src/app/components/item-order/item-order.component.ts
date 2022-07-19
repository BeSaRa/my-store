import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItem } from "../../models/order-item";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss']
})
export class ItemOrderComponent {
  @Input()
  item!: OrderItem
  @Output()
  deleteItem: EventEmitter<void> = new EventEmitter<void>()

  constructor(private cartService: CartService) { }

  removeItem(): void {
    this.cartService.order.removeItem(this.item.product)
    this.deleteItem.next()
  }

}
