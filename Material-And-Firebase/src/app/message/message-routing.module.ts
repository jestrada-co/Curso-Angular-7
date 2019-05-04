import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponentComponent } from './message-component/message-component.component';

const routes: Routes = [
  {
    path: 'message',
    component: MessageComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
