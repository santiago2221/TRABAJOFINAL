import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class Crud2Service {
  API: string= 'http://localhost/perfiles/'
  constructor(private clienteHttp: HttpClient) { }
  agregarEmpleado(datosEmpleado: usuario): Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);

  }
  obtenerEmpleado(){
    return this.clienteHttp.get(this.API);
  }
 
  borrarEmpleado(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id);

  }

}
