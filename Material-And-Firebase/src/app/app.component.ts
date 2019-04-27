import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  message: string;
  messageRef: AngularFireList<any>;
  messages: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.messageRef = db.list('messages');
    this.messages = this.messageRef.valueChanges();
  }
  save() {
    this.messageRef.push ({
      name: this.name,
      message: this.message,
    });
  }
  delete(key: string) {
    this.messageRef.remove(key);
  }
}
