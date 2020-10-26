import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as customerActions from './shared/store/customer/customer.actions';
import * as shipmentActions from './shared/store/shipment/shipment.actions';


const routes: Routes = [
  { path: '', redirectTo: '/basket', pathMatch: 'full' },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)
  },
  {
    path: 'customer-data',
    loadChildren: () => import('./customer-data/customer-data.module').then(m => m.CustomerDataModule),
    data: { prefetchAction: customerActions.Load },
  },
  {
    path: 'shipment',
    loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule),
    data: { prefetchAction: shipmentActions.Load },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
