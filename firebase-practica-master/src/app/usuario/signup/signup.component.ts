import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  nombre: string;
  correo: string;
  clave: string;
  constructor(private service: AppService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  crearCuenta() {
    this.service.crearCuenta('usuarios', {
      nombre: this.nombre,
      correo: this.correo,
      clave: this.clave
    }).subscribe(data => {
      console.log(data);
      this.dialog.closeAll();
    });
  }

}
