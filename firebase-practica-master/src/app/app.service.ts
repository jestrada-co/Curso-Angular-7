import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private cliente: HttpClient) { }

  recuperarClave(correo: string) {
  }
  crearCuenta(coleccion: string, objeto: object) {
    return this.cliente.post(`${environment.apiUrl}/${coleccion}`, objeto);
  }
  autenticar(coleccion: string, objeto: object) {
    return this.cliente.post(`${environment.apiUrl}/${coleccion}`, objeto);
  }
  cerrarSesion() {
  }
  verficarSesion() {
  }
  listar(coleccion: string) {
    return this.cliente.get(`${environment.apiUrl}/${coleccion}`);
  }
  consultar(coleccion: string, key: string) {
    return this.cliente.get(`${environment.apiUrl}/${coleccion}/${key}`);
  }
  guardar(coleccion: string, objeto: object) {
    return this.cliente.post(`${environment.apiUrl}/${coleccion}`, objeto);
  }
  subirArchivo(carpeta: string, nombreArchivo: string, archivo: any) {
  }
  borrar(coleccion: string, key: string) {
    return this.cliente.delete(`${environment.apiUrl}/${coleccion}/${key}`);
  }
  editar(coleccion: string, key: string, objeto: object){
    return this.cliente.put(`${environment.apiUrl}/${coleccion}/${key}`, objeto);
  }
}
