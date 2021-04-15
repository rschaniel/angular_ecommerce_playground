import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDataComponent } from './customer-data/customer-data.component';

const routes: Routes = [
  { path: '', component: CustomerDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDataRoutingModule { }
