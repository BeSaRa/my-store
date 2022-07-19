import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClientModule } from "@angular/common/http";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductNotExistsComponent } from './components/product-not-exists/product-not-exists.component';
import { BadProductIdComponent } from './components/bad-product-id/bad-product-id.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from "@angular/forms";
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ItemOrderComponent } from './components/item-order/item-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ErrorPageComponent,
    ProductNotExistsComponent,
    BadProductIdComponent,
    AddToCartComponent,
    ProductComponent,
    CheckoutComponent,
    ItemOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
