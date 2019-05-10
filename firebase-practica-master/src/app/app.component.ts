import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  estaAutenticado: boolean;
  usuario: any;
  mensaje: string;
  constructor() {
  }

  ngOnInit() {
      if (localStorage.getItem('user')) {
        this.estaAutenticado = true;
      }
  }

  autenticar() {
      this.estaAutenticado = true;
  }
  cerrarSesion() {
    this.estaAutenticado = false;
  }
}
