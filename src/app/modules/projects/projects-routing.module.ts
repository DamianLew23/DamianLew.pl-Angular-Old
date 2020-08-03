import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PoradyzakupoweComponent} from './pages/wordpress/poradyzakupowe/poradyzakupowe.component';
import {MselektronikComponent} from './pages/wordpress/mselektronik/mselektronik.component';
import {PaskoAutoserwisComponent} from './pages/wordpress/pasko-autoserwis/pasko-autoserwis.component';
import {LgfalownikiComponent} from './pages/wordpress/lgfalowniki/lgfalowniki.component';
import {EpocztaonlineComponent} from './pages/wordpress/epocztaonline/epocztaonline.component';
import {PortaltechnologiiComponent} from './pages/wordpress/portaltechnologii/portaltechnologii.component';

const projectsRoutes: Routes = [
  {
    path: 'poradyzakupowe-wordpress',
    component: PoradyzakupoweComponent
  },
  {
    path: 'mselektronik-wordpress',
    component: MselektronikComponent
  },
  {
    path: 'pasko-autoserwis-wordpress',
    component: PaskoAutoserwisComponent
  },
  {
    path: 'lgfalowniki-wordpress',
    component: LgfalownikiComponent
  },
  {
    path: 'epoczta-wordpress',
    component: EpocztaonlineComponent
  },
  {
    path: 'portaltechnologii-wordpress',
    component: PortaltechnologiiComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ProjectsRoutingModule { }
