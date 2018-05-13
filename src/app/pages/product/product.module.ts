import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PgProductDetailComponent} from './pg-product-detail/pg-product-detail.component';
import {PgProductListComponent} from './pg-product-list/pg-product-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PgProductListComponent,
    PgProductDetailComponent]
})
export class ProductModule {
}
