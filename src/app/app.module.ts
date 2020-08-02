import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './modules/home/home.module';
import {AppRoutingModule} from './app-routing.module';
import {AboutModule} from './modules/about/about.module';
import {PortfolioModule} from './modules/portfolio/portfolio.module';
import {OfferModule} from './modules/offer/offer.module';
import {ContactModule} from './modules/contact/contact.module';
import {ProjectsModule} from './modules/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    AboutModule,
    PortfolioModule,
    ProjectsModule,
    OfferModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
