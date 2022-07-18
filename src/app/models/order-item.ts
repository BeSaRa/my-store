import { Cloneable } from "./cloneable";
import { Subject } from "rxjs";

export class OrderItem extends Cloneable<OrderItem> {
  price: number = 0
  quantity: number = 0
  total: number = 0
  changes$!: Subject<null>

  private canDecrease(): boolean {
    return this.quantity > 0
  }

  calculateTotal(): void {
    this.total = this.quantity * this.price
    this.changes$.next(null)
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
