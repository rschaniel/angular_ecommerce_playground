import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Review } from '../../shared/models/reviews.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  @Input()
  review: Review;
}
