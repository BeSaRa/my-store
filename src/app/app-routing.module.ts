import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductResolver } from "./resolvers/product.resolver";
import { ProductGuard } from "./guards/product.guard";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { ProductNotExistsComponent } from "./components/product-not-exists/product-not-exists.component";
import { BadProductIdComponent } from "./components/bad-product-id/bad-product-id.component";

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    canActivate: [ProductGuard],
    resolve: {
      product: ProductResolver
    }
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'bad-product-id',
    component: BadProductIdComponent
  },
  {
    path: 'product-not-exists',
    component: ProductNotExistsComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
