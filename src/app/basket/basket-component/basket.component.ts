import { Component, OnInit } from '@angular/core';
import { BasketItem, Price, Quantity } from '../../shared/models/basket-item.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BasketState } from '../../shared/store/basket/basket.reducers';
import { getTotalPrice, selectBasketItems } from '../../shared/store/basket/basket.selectors';
import * as basketActions from '../../shared/store/basket/basket.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  items$: Observable<BasketItem[]>;
  total$: Observable<Price>;

  constructor(private store: Store<BasketState>) { }

  ngOnInit(): void {
    this.store.dispatch(basketActions.Load());
    this.items$ = this.store.select(selectBasketItems);
    this.total$ = this.store.select(getTotalPrice);

    const basketItem: BasketItem = {
      name: 'Name',
      quantity: 2,
      price: 9.90
    };

    basketItem.quantity = 5;
    basketItem.price = 19.90;
/*
    basketItem.price = basketItem.quantity;
    basketItem.quantity = basketItem.price ;

    this.calculateTotal(basketItem.quantity, basketItem.price, 5);
    this.calculateTotal(basketItem.price, basketItem.quantity, 5);
    */
  }

  calculateTotal(price: Price, quantity: Quantity, absoluteDiscount: number) {
    return quantity * (price - absoluteDiscount);
  }
}
