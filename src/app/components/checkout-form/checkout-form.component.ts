import { Component, ViewChild } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";
import { UserInfo } from "../../models/user-info";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent {
  userInfo: UserInfo = new UserInfo(this.cartService.order)
  @ViewChild('form', { static: true })
  form!: NgForm

  constructor(private cartService: CartService, private router: Router) { }

  emptyCart(): void {
    const answer = confirm('are you sure that you want to empty your cart');
    if (answer) {
      this.cartService.emptyCart()
      // i invoke then because my IDE blaming 'Promise returned from navigate is ignored'
      this.router.navigate(['/']).then()
    }
  }

  validateNumber($event: KeyboardEvent): void {
    const specialAllowed = ['Backspace', 'Tab'];
    const numberPattern = /\d/
    !numberPattern.test($event.key) && !specialAllowed.includes($event.key) && $event.preventDefault()
  }

  submitForm(): void {
    if (this.form.invalid) {
      alert('Please fill all required fields then submit the form')
    } else {
      this.cartService.setUserInfo(this.userInfo)
      // here should I send the data to the backend, and because we don't have a real backend we will navigate to the success page then empty the cart
      // I invoke then because my IDE blaming 'Promise returned from navigate is ignored'
      this.router.navigate(['success']).then()
    }
  }
}
