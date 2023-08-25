import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../interfaces/usuario';
import { Produto } from '../interfaces/producto';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string= 'http://localhost/productos/'
  constructor(private clienteHttp: HttpClient ) { }
  
  agregarProducto(datosProducto:Produto ): Observable<any> {
    return this.clienteHttp.post(this.API+"?insertar=1",datosProducto);

  }
  obtenerProducto(){
    return this.clienteHttp.get(this.API);
  }
 
  borrarProducto(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  obtenerrProducto(id:any): Observable<any> {
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  editarProducto(id:any ,datosProducto:any): Observable<any> {
    return this.clienteHttp.post(this.API+"?actualizar="+ id,datosProducto);
  }


}
