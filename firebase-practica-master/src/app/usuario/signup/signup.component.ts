import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  correo: string;
  clave: string;
  constructor(private service: AppService) { }

  ngOnInit() {
  }

  crearCuenta() {
    this.service.crearCuenta(this.correo, this.clave);
  }

}
