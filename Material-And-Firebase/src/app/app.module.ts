import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageModule } from './message/message.module';
import { MaterialDesignModule } from './material-design/material-design.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MessageModule,
    MaterialDesignModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
