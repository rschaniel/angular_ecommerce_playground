import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BasketEffects } from './shared/store/basket/basket.effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './reducers';
import { CustomerEffects } from './shared/store/customer/customer.effects';
import { ShipmentEffects } from './shared/store/shipment/shipment.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([BasketEffects, CustomerEffects, ShipmentEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
