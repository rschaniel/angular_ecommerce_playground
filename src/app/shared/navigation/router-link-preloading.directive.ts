import {
  Directive, Input, OnInit,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkPreloadingDirective implements OnInit {
  @Input('routerLink') routerLink: string[] | string;

  constructor(
    private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const path = this.routerLink;
    const pathRoute = this.router.config.filter((route: Route) => path === `/${route.path}`)[0];
    const data = pathRoute?.data;

    if (data?.prefetchAction) {
      this.store.dispatch(data.prefetchAction());
    }
  }
}
