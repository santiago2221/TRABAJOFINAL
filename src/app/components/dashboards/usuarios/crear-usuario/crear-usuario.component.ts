import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { usuario } from 'src/app/interfaces/usuario';

import { Crud2Service } from 'src/app/services/crud2.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit{
 form : FormGroup;

  constructor(private fb : FormBuilder, private router: Router, private crudservice: Crud2Service){
this.form= this.fb.group({
  usuario: ['', Validators.required],
  nombres: ['', Validators.required],
  apellidos: ['', Validators.required],
  sexo: ['', Validators.required],
});
  }
ngOnInit(): void {
  
}
agregarUsu(){
 
  this.router.navigate(['/dashboards/usuarios']);
  this.crudservice.agregarEmpleado(this.form.value).subscribe();
  
}
}