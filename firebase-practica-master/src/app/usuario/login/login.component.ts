import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './../../app.service';
import { MatDialog } from '@angular/material';
import { PasswordRecoveryComponent } from './../password-recovery/password-recovery.component';
import { SignupComponent } from './../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() EmisorEvento: EventEmitter<any> = new EventEmitter();
  correo: string;
  clave: string;
  mensaje: string;
  constructor(private servicio: AppService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  autenticar() {
    this.servicio.autenticar('usuarios/login', {
      correo: this.correo,
      clave: this.clave}
      ).subscribe(resp => {
        if (resp['success']) {
          localStorage.setItem('user', resp['token']);
          this.EmisorEvento.emit();
          console.log(resp['token']);
        } else {
          this.mensaje = 'Verifique sus credenciales';
          console.log(resp);
        }
    }, error => {
      this.mensaje = 'Verifique sus credenciales';
    });
  }

  mostrarDialog(componente: string) {
    if (componente === 'signup') {
      this.dialog.open(SignupComponent, {
        width: '400px'
      });
    } else {
      if (componente === 'passwordRecovery') {
        this.dialog.open(PasswordRecoveryComponent, {
          width: '400px'
        });
      }
    }

  }

}
