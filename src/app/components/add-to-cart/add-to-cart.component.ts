import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/product";

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input()
  product!: Product
  @Input()
  center: boolean = false;
  quantity: number[] = Array.of(1,2,3,4,5,6,7,8,9,10)

  constructor() { }

  ngOnInit(): void {
  }

}
