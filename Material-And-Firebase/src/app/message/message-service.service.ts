import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  messageRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {
    this.messageRef = db.list('messages');
  }

  list() {
    return this.messageRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val()})))
    );
  }

  save(name: string, message: string, imgUrl: string, fileName: string) {
    this.messageRef.push ({
      name,
      message,
      imgUrl,
      fileName
    });
  }

  uploadFile(folder: string, fileName: string, file: any) {
    this.storage.ref(folder + '/' + fileName).put(file);
  }

  delete(key: string) {
    this.messageRef.remove(key);
  }

  deleteFile(folder: string, fileName: string) {
    this.storage.ref(folder + '/' + fileName).delete();
  }
}
