import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Papeleria } from '../interfaces/papeleria';


@Injectable({
  providedIn: 'root'
})
export class Crud4Service {
  API: string= 'http://localhost/papeleria/'
  constructor(private clienteHttp: HttpClient) { }

  agregarPapeleria(datosPapeleria:Papeleria ): Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosPapeleria);

  }
  obtenerPapeleria(){
    return this.clienteHttp.get(this.API);
  }
 
  borrarPapeleria(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  obtenerrPapeleria(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  editarPapeleria(id:any ,datosPapeleria:any): Observable<any> {
    return this.clienteHttp.post(this.API+"?actualizar="+ id,datosPapeleria);
  }
}


