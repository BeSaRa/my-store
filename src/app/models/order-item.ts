import { Cloneable } from "./cloneable";
import { Subject } from "rxjs";
import { Product } from "./product";

export class OrderItem extends Cloneable<OrderItem> {
  product!: Product;
  quantity: number = 0
  total: number = 0
  changes$!: Subject<void>

  canDecrease(): boolean {
    return this.quantity > 1
  }

  calculateTotal(): void {
    this.total = this.quantity * this.product.price
    this.changes$.next()
  }

  addToQuantity(quantity: number): void {
    this.quantity = this.quantity + quantity;
    this.calculateTotal()
  }

  increase(): void {
    this.addToQuantity(1)
  }

  decrease(): void {
    this.canDecrease() && this.addToQuantity(-1)
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
    this.calculateTotal()
  }
}
