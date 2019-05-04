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
  imgPath: string;

  mimeType: any;
  reader: any;

  constructor(private service: MessageServiceService) { }

  ngOnInit() {
    this.messages = this.service.list();
  }
  save() {
    this.service.save(this.name, this.message, this.imgUrl);
    this.name = '';
    this.message = '';
    this.imgUrl = '';
  }
  delete(key: string) {
    this.service.delete(key);
  }
  preview(files) {
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
    this.reader.readAsDataURL(files[0]);
    this.reader.onload = () => {
      this.imgUrl = this.reader.result;
    };
  }
}
