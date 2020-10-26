import {
  Directive, Input, OnChanges, SimpleChanges,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkPreloadingDirective implements OnChanges {
  @Input('routerLink') routerLink: string[] | string;

  constructor(
    private router: Router,
    private store: Store<AppState>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const path = this.routerLink;

    // TODO make it only execute once
    const pathRoute = this.router.config.filter((route: Route) => path === `/${route.path}`)[0];
    const data = pathRoute?.data;

    if (data?.prefetchAction) {
      this.store.dispatch(data.prefetchAction());
    }
  }
}
