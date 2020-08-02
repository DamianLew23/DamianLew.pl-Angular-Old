import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OfferComponent} from './pages/offer/offer.component';

const offerRoutes: Routes = [
  {
    path: 'oferta', component: OfferComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(offerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class OfferRoutingModule { }
