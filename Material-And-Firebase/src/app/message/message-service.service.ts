import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  messageRef: AngularFireList<any>;
  messages: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.messageRef = db.list('messages');
  }
  list() {
    return this.messages = this.messageRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val()})))
    );
  }
  save(name: string, message: string, imgUrl: string) {
    this.messageRef.push ({
      name,
      message,
      imgUrl
    });
  }
  delete(key: string) {
    this.messageRef.remove(key);
  }
}
