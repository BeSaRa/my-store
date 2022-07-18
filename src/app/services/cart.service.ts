import { Injectable } from '@angular/core';
import { Order } from "../models/order";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order: Order = new Order();

  constructor() { }
}
