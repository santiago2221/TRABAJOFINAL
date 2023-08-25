import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Crud3Service } from 'src/app/services/crud3.service';


@Component({
  selector: 'app-crear-maquillaje',
  templateUrl: './crear-maquillaje.component.html',
  styleUrls: ['./crear-maquillaje.component.css']
})
export class CrearMaquillajeComponent implements OnInit {

formp : FormGroup
  constructor(private fb: FormBuilder, private router: Router, private crudService: Crud3Service    
    ){
    this.formp = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      provedor: ['', Validators.required],
    });
  }
ngOnInit(): void {
  
}
agregarMaquillaje(){
  this.crudService.agregarMaquillaje(this.formp.value).subscribe();
  this.router.navigate(['/dashboards/maquillaje'])
}
}