import { OrderItem } from "./order-item";
import { Subject } from "rxjs";
import { Product } from "./product";

export class Order {
  items: Map<number, OrderItem> = new Map<number, OrderItem>()
  totalPrice: number = 0;
  totalItems: number = 0;
  itemChanged$: Subject<null> = new Subject<null>()

  constructor() {
    this.listenToItemChange();
  }

  private listenToItemChange(): void {
    this.itemChanged$
      .subscribe(() => {
        this.calculatePriceAndTotalItems()
      })
  }

  private itemExists(product: Product): boolean {
    return this.items.has(product.id)
  }

  private getItem(product: Product): OrderItem {
    return this.items.get(product.id)!
  }

  addItem(product: Product, quantity: number): void {
    if (this.itemExists(product)) {
      this.getItem(product).addToQuantity(quantity)
    } else {
      this.items.set(product.id, new OrderItem().clone({
        quantity: quantity,
        price: product.price,
        changes$: this.itemChanged$
      }))
      this.getItem(product).calculateTotal()
    }
  }

  removeItem(product: Product): void {
    this.items.delete(product.id);
    this.itemChanged$.next(null);
  }


  private calculatePriceAndTotalItems(): void {
    this.totalPrice = 0;
    this.totalItems = 0;
    this.items.forEach((item) => {
      this.totalItems += item.quantity;
      this.totalPrice += item.total;
    });
  }
}
