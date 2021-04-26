import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ], {initialNavigation: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
