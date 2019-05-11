import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(private service: AppService) { }

  correo: string;

  ngOnInit() {
  }

  recuperarClave() {
    this.service.recuperarClave(this.correo);
  }

}
