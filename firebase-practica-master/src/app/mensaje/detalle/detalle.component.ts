import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppService} from './../../app.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  id: string;
  correo: string;
  mensaje: string;
  nombre: string;
  constructor(private router: ActivatedRoute, private servicio: AppService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.id = params.id;
      this.servicio.consultar('mensajes', this.id)
      .subscribe((data: any) => {
        this.nombre = data.nombre;
        this.correo = data.correo;
        this.mensaje = data.mensaje;
      });
    })
  }

  editar() {
    this.servicio.editar('mensajes', this.id, {
      nombre: this.nombre,
      correo: this.correo,
      menaje: this.mensaje
    }).subscribe(data => {
      this.servicio.listar('mensajes');
    }, error => {
      console.log(error);
    });
  }

}