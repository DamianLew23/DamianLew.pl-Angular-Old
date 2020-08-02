import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from './pages/contact/contact.component';


const contactRoutes: Routes = [
  {
    path: 'kontakt', component: ContactComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ContactRoutingModule { }
