import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product.interface';
import { Store } from '@ngrx/store';
import { ProductState } from '../../shared/store/product/product.reducers';
import * as productActions from '../../shared/store/product/product.actions';
import { selectProducts } from '../../shared/store/product/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(productActions.Load());
    this.products$ = this.store.select(selectProducts);
  }

}
