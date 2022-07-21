import { Injectable } from '@angular/core';
import { Order } from "../models/order";
import { UserInfo } from "../models/user-info";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order: Order = new Order();
  private userInfo?: UserInfo

  constructor() { }

  emptyCart(): void {
    this.order = new Order()
  }

  setUserInfo(userInfo: UserInfo): void {
    this.userInfo = userInfo;
  }

  removeUserInfo(): void {
    this.userInfo = undefined
  }

  getUserInfo(): UserInfo {
    return this.userInfo!
  }

  hasUserInfo(): boolean {
    return !!this.userInfo
  }
}
