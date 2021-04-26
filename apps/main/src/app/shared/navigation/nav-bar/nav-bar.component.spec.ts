import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavBarComponent],
        imports: [
          RouterTestingModule.withRoutes([
            { path: 'previous-page', component: DummyComponent },
            { path: 'next-page', component: DummyComponent },
          ]),
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should not show the back button if no back link', () => {
    component.backLink = undefined;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(
        'button[data-test-selector="back-button"]'
      )
    ).toBeNull();
  });

  it('should not show the next button if no next link', () => {
    component.nextLink = undefined;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(
        'button[data-test-selector="back-button"]'
      )
    ).toBeNull();
  });

  it('should show the buttons if the links are given', () => {
    component.backLink = 'previous-page';
    component.nextLink = 'next-page';
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(
        'button[data-test-selector="back-button"]'
      )
    ).not.toBeNull();
    expect(
      fixture.nativeElement.querySelector(
        'button[data-test-selector="next-button"]'
      )
    ).not.toBeNull();
  });

  it('should navigate on button click', fakeAsync(() => {
    component.nextLink = 'next-page';
    fixture.detectChanges();
    fixture.nativeElement
      .querySelector('button[data-test-selector="next-button"]')
      .click();

    tick();
    expect(router.url).toBe('/next-page');

    component.backLink = 'previous-page';
    fixture.detectChanges();
    fixture.nativeElement
      .querySelector('button[data-test-selector="back-button"]')
      .click();

    tick();
    expect(router.url).toBe('/previous-page');
  }));
});

@Component({
  selector: 'app-dummy',
  template: ``,
})
class DummyComponent {}
