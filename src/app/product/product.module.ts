import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TitleFilterPipe } from './title-filter.pipe';
import { MatIconModule } from '@angular/material/icon';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    TitleFilterPipe,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NavigationModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class ProductModule {
}
