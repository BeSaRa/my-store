import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../models/product";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  @HostBinding('class')
  classes: string = 'flex h-full';
  product!: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.listenToProductChange();
  }

  listenToProductChange(): void {
    this.activatedRoute
      .data
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.product = data['product'] as Product
      });
  }

}
