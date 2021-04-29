import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./basket/basket.module').then((m) => m.BasketModule),
  },
  {
    path: 'customer-data',
    loadChildren: () =>
      import('./customer-data/customer-data.module').then(
        (m) => m.CustomerDataModule
      ),
  },
  {
    path: 'shipment',
    loadChildren: () =>
      import('./shipment/shipment.module').then((m) => m.ShipmentModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('orders/OrderModule').then(m => m.OrderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
