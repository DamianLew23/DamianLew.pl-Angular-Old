import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsRoutingModule} from './projects-routing.module';
import {PoradyzakupoweComponent} from './pages/wordpress/poradyzakupowe/poradyzakupowe.component';
import { MselektronikComponent } from './pages/wordpress/mselektronik/mselektronik.component';
import { PaskoAutoserwisComponent } from './pages/wordpress/pasko-autoserwis/pasko-autoserwis.component';
import { LgfalownikiComponent } from './pages/wordpress/lgfalowniki/lgfalowniki.component';
import { EpocztaonlineComponent } from './pages/wordpress/epocztaonline/epocztaonline.component';
import { PortaltechnologiiComponent } from './pages/wordpress/portaltechnologii/portaltechnologii.component';
import { MyportfolioComponent } from './pages/angular/myportfolio/myportfolio.component';
import { PoradyzakupoweFrontendComponent } from './pages/angular/poradyzakupowe-frontend/poradyzakupowe-frontend.component';
import { DobierzfalownikFrontendComponent } from './pages/angular/dobierzfalownik-frontend/dobierzfalownik-frontend.component';
import { PoradyzakupoweBackendComponent } from './pages/java/poradyzakupowe-backend/poradyzakupowe-backend.component';
import { DobierzfalownikBackendComponent } from './pages/java/dobierzfalownik-backend/dobierzfalownik-backend.component';



@NgModule({
  declarations: [
    PoradyzakupoweComponent,
    MselektronikComponent,
    PaskoAutoserwisComponent,
    LgfalownikiComponent,
    EpocztaonlineComponent,
    PortaltechnologiiComponent,
    MyportfolioComponent,
    PoradyzakupoweFrontendComponent,
    DobierzfalownikFrontendComponent,
    PoradyzakupoweBackendComponent,
    DobierzfalownikBackendComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
