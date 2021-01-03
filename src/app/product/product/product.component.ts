import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product: Product;
}
