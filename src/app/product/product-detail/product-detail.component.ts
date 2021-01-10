import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productActions from '../../shared/store/product/product.actions';
import { Store } from '@ngrx/store';
import { ProductState } from '../../shared/store/product/product.reducers';
import { Product } from '../../shared/models/product.interface';
import { Observable, throwError } from 'rxjs';
import { ReviewService } from '../../shared/services/review.service';
import { Review } from '../../shared/models/reviews.interface';
import { selectProductById } from '../../shared/store/product/product.selectors';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  reviews$: Observable<Review[]>;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<ProductState>,
    private reviewService: ReviewService
  ) {
  }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.store.dispatch(productActions.loadById({id: productId}));
    this.product$ = this.store.select(selectProductById, {id: productId});

    this.reviews$ = this.reviewService.getReviews(productId).pipe(
      catchError(err => {
        this.error = err;
        return throwError(err);
      })
    );
  }

}
