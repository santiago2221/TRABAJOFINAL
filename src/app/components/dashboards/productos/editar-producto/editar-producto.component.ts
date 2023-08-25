import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  
  formp : FormGroup
  elID:any
  constructor( public fb: FormBuilder, private router: Router, private crudService: CrudService, private activateRoute: ActivatedRoute    
    ){
      this.elID=this.activateRoute.snapshot.paramMap.get('id');
      console.log(this.elID)
      this.crudService.obtenerrProducto(this.elID).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.formp.setValue({
            id: respuesta[0] ['id'],
            descripcion: respuesta[0] ['descripcion'],
            observacion: respuesta[0] ['observacion'],
            provedor: respuesta[0] ['provedor'],
          })
        }
      )
    this.formp = this.fb.group({
      id: ['', Validators.required],
      descripcion: ['', Validators.required],
      observacion: ['', Validators.required],
      provedor: ['', Validators.required],
    });
  }
ngOnInit(): void {
  
}
editarProducto():any{
  this.router.navigate(['/dashboards/productos'])
  console.log(this.elID);
  console.log(this.formp.value);
  this.crudService.editarProducto(this.elID, this.formp.value).subscribe(()=>{
    
  })
}
}
