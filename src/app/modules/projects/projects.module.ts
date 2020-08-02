import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsRoutingModule} from './projects-routing.module';
import {PoradyzakupoweComponent} from './pages/wordpress/poradyzakupowe/poradyzakupowe.component';



@NgModule({
  declarations: [ PoradyzakupoweComponent ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
