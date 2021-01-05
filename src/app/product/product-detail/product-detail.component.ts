import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productActions from '../../shared/store/product/product.actions';
import { Store } from '@ngrx/store';
import { ProductState } from '../../shared/store/product/product.reducers';
import { Product } from '../../shared/models/product.interface';
import { selectProductById } from '../../shared/store/product/product.selectors';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.store.dispatch(productActions.loadById({id: productId}));
    this.product$ = this.store.select(selectProductById, {id: productId});
  }

}
