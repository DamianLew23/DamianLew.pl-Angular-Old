import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './pages/about/about.component';

const aboutRoutes: Routes = [
  {
    path: 'o-mnie', component: AboutComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AboutRoutingModule { }
