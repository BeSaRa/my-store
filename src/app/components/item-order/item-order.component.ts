import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItem } from "../../models/order-item";
import { CartService } from "../../services/cart.service";
import { NgModel } from "@angular/forms";

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

  constructor(private cartService: CartService) {}

  removeItem(): void {
    this.cartService.order.removeItem(this.item.product)
    this.deleteItem.next()
  }

  updateQuantity(ngModel: NgModel, value: number | null): void {
    const quantity = value && value > 0 ? value : 1;
    this.item.setQuantity(quantity)
    // in case if user remove the value and come null we have to update viewModel manually
    !value && ngModel.valueAccessor?.writeValue(quantity)
  }
}
