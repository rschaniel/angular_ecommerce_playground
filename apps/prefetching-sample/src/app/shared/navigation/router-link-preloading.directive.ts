import {
  Directive, Input, OnChanges, SimpleChanges,
} from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { PrefetchingRegistryService } from './prefetching-registry.service';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkPreloadingDirective implements OnChanges {
  @Input('routerLink') routerLink: string[] | string;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private prefetchingRegistryService: PrefetchingRegistryService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const path = this.routerLink;
    const pathRoute = this.router.config.filter((route: Route) => path === `/${route.path}`)[0];
    const data = pathRoute?.data;

    if (data?.prefetchAction) {
      this.prefetchingRegistryService.tryDispatchingForPage(data.prefetchAction, pathRoute.path, this.store.dispatch);
    }
  }
}
