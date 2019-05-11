import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './../app-material/app-material.module';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    LayoutRoutingModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
