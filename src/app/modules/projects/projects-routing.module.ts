import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PoradyzakupoweComponent} from './pages/wordpress/poradyzakupowe/poradyzakupowe.component';

const projectsRoutes: Routes = [
  {
    path: 'poradyzakupowe-wordpress',
    component: PoradyzakupoweComponent
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
