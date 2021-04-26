import { Action } from '@ngrx/store';
import { PrefetchingRegistryService } from './prefetching-registry.service';

describe('PrefetchingRegistryService', () => {
  it('should prefetch once per page', () => {
    const prefetchingRegistryService = new PrefetchingRegistryService();
    const callback: (Action) => void = jasmine.createSpy('dispatchCallback');

    const action1: Action = { type: 'Action1' };
    const action2: Action = { type: 'Action2' };

    prefetchingRegistryService.tryDispatchingForPage(
      action1,
      'homepage',
      callback
    );
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(action1);

    prefetchingRegistryService.tryDispatchingForPage(
      action2,
      'homepage',
      callback
    );
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(action2);

    prefetchingRegistryService.tryDispatchingForPage(
      action1,
      'homepage',
      callback
    );
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
