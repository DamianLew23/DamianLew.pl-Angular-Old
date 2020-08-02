import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './pages/offer/offer.component';
import {OfferRoutingModule} from './offer-routing.module';



@NgModule({
  declarations: [OfferComponent],
  imports: [
    CommonModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
