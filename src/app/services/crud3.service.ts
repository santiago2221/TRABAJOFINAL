import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../interfaces/usuario';
import { Maquillaje } from '../interfaces/maquillaje';

@Injectable({
  providedIn: 'root'
})
export class Crud3Service {
  API: string= 'http://localhost/maquillaje/'
  constructor(private clienteHttp: HttpClient) { }

  agregarMaquillaje(datosMaquillaje:Maquillaje ): Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosMaquillaje);

  }
  obtenerMaquillaje(){
    return this.clienteHttp.get(this.API);
  }
 
  borrarMaquillaje(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  obtenerrMaquillaje(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  editarMaquillaje(id:any ,datosMaquillaje:any): Observable<any> {
    return this.clienteHttp.post(this.API+"?actualizar="+ id,datosMaquillaje);
  }
}