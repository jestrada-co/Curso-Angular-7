import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageServiceService } from './../message-service.service';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
})
export class MessageComponentComponent implements OnInit {
  messages: Observable<any[]>;
  name: string;
  message: string;
  imgMessage: string;
  imgUrl: string;
  imgUrlOriginal: any;
  imgPath: string;
  mimeType: any;
  reader: any;
  folder: string;
  fileName: string;

  constructor(private service: MessageServiceService) { }
  initFields() {
    this.name = '';
    this.message = '';
    this.imgUrl = null;
    this.imgUrlOriginal = null;
  }

  ngOnInit() {
    this.initFields();
    this.messages = this.service.list();
    this.folder = 'images';
  }
  save() {
    this.service.save(this.name, this.message, this.imgUrl, this.fileName);
    this.service.uploadFile(this.folder, this.fileName, this.imgUrlOriginal);
    this.initFields();
  }
  delete(fileName: string, key: string) {
    this.service.delete(key);
    this.service.deleteFile(this.folder, fileName);
    this.initFields();
  }
  preview(files: any) {
    if (files.length === 0) {
      return;
    }

    this.mimeType = files[0].type;
    if (this.mimeType.match(/image\/*/) == null) {
      this.imgMessage = 'Only images are supported.';
      return;
    }

    this.reader = new FileReader();
    this.imgPath = files;

    this.fileName = String(Date.now()) + '.' + files[0].name.split('.')[1];
    this.imgUrlOriginal = files[0];

    this.reader.readAsDataURL(files[0]);
    this.reader.onload = () => {
      this.imgUrl = this.reader.result;
    };
  }
}
