import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';

import { MaterialDesignModule } from '../material-design/material-design.module';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MessageComponentComponent } from './message-component/message-component.component';
import { MessageRoutingModule } from './message-routing.module';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [MessageComponentComponent],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialDesignModule,
    MessageRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MessageModule { }
