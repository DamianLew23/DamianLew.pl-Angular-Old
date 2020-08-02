import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HiddenMenuComponent } from './hidden-menu/hidden-menu.component';
import { MediaComponent } from './media/media.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [FooterComponent, HeaderComponent, SocialMediaComponent, HiddenMenuComponent, MediaComponent, MenuComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialMediaComponent,
    HiddenMenuComponent,
    MediaComponent,
    MenuComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CoreModule { }
