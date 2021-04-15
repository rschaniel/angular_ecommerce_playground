import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { Product } from '../../shared/models/product.interface';
import { Store } from '@ngrx/store';
import { ProductState } from '../../shared/store/product/product.reducers';
import * as productActions from '../../shared/store/product/product.actions';
import { selectProducts } from '../../shared/store/product/product.selectors';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  searchValue$: Observable<string>;

  constructor(private store: Store<ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(productActions.load());
    this.products$ = this.store.select(selectProducts);
    this.initSearch();
  }

  private initSearch() {
    const searchBox = document.getElementById('searchBox');

    this.searchValue$ = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      map(text => text.length > 1 ? text : null),
      debounceTime(10),
      distinctUntilChanged()
    );
  }
}
