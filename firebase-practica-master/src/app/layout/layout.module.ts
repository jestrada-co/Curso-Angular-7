import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    LayoutRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
