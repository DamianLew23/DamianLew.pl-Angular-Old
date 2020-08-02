import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';

const portfolioRoutes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(portfolioRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PortfolioRoutingModule { }
