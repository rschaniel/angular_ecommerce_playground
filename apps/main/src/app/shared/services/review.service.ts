import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Review } from '../models/reviews.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  public getReviews(productId: number): Observable<Review[]> {
    return of([
      { id: 1, title: 'Great product', description: 'Exactly as expected' },
      { id: 2, title: 'I like it', description: 'Beautiful' },
    ]);
  }
}
