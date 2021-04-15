import { Injectable } from '@angular/core';
import { Action, ActionCreator } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class PrefetchingRegistryService {
  private actionsOnPages: Set<string> = new Set();

  private static buildIdentifier(action: Action, pageIdentifier: string): string {
    return `${pageIdentifier}_${action.type}`;
  }

  tryDispatchingForPage(action: Action, pageIdentifier: string, dispatchingCallback: (action: any) => void) {
    const identifier = PrefetchingRegistryService.buildIdentifier(action, pageIdentifier);

    if (!this.actionsOnPages.has(identifier)) {
      this.actionsOnPages.add(identifier);
      dispatchingCallback(action);
    }
  }

}
