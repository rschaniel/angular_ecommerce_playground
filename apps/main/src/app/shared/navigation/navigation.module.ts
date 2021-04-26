import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkPreloadingDirective } from './router-link-preloading.directive';

@NgModule({
  declarations: [NavBarComponent, RouterLinkPreloadingDirective],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [NavBarComponent],
})
export class NavigationModule {}
