import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
formp : FormGroup
  constructor(private fb: FormBuilder, private router: Router, private crudService: CrudService    
    ){
    this.formp = this.fb.group({
      id: ['', Validators.required],
      descripcion: ['', Validators.required],
      observacion: ['', Validators.required],
      provedor: ['', Validators.required],
    });
  }
ngOnInit(): void {
  
}
agregarProduto(){
 
  this.crudService.agregarProducto(this.formp.value).subscribe();
  this.router.navigate(['/dashboards/productos'])
}
}