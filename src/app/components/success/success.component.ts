import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { UserInfo } from "../../models/user-info";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  userInfo!: UserInfo

  constructor(private cartService: CartService) {
    this.userInfo = this.cartService.getUserInfo()
  }

  ngOnInit(): void {
    this.cartService.emptyCart()
  }


}
