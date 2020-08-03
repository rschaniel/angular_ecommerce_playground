import { Component, OnInit } from '@angular/core';
import { BasketItem } from '../../shared/models/basket-item.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BasketState } from '../../shared/store/basket/basket.reducers';
import { selectBasketItems } from '../../shared/store/basket/basket.selectors';
import * as basketActions from '../../shared/store/basket/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  items$: Observable<BasketItem[]>;

  constructor(private store: Store<BasketState>) { }

  ngOnInit(): void {
    this.store.dispatch(basketActions.Load());
    this.items$ = this.store.select(selectBasketItems);
  }

}