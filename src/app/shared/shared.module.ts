import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from './material.module';

import { LoadingComponent } from '../common/components/loading/loading.component';
import { HeadComponent } from '../common/components/head/head.component';
import { FooterComponent } from '../common/components/footer/footer.component';
import { MenuComponent } from '../common/components/menu/menu.component';
import { MoremenuComponent } from '../common/components/moremenu/moremenu.component';


@NgModule({
  declarations: [
    LoadingComponent,
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MoremenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoadingComponent,
    HeadComponent,
    FooterComponent,
    MenuComponent,
    MoremenuComponent,
    MaterialModule
  ],
  entryComponents: [
    MoremenuComponent
  ],
  providers: [
  ]

})
export class SharedModule { }
