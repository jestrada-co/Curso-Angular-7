import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from '../material-design/material-design.module';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageComponentComponent } from './message-component/message-component.component';
import { MessageRoutingModule } from './message-routing.module';

import { Ng2ImgMaxModule } from 'ng2-img-max';

@NgModule({
  declarations: [MessageComponentComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    MessageRoutingModule,
    Ng2ImgMaxModule
  ]
})
export class MessageModule { }
