import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Crud4Service } from 'src/app/services/crud4.service';

@Component({
  selector: 'app-crear-papeleria',
  templateUrl: './crear-papeleria.component.html',
  styleUrls: ['./crear-papeleria.component.css']
})
export class CrearPapeleriaComponent {

  formp : FormGroup
    constructor(private fb: FormBuilder, private router: Router, private crud4Service: Crud4Service    
      ){
      this.formp = this.fb.group({
        id: ['', Validators.required],
        producto: ['', Validators.required],
        categoria: ['', Validators.required],
        provedor: ['', Validators.required],
      });
    }
  ngOnInit(): void {
    
  }
  agregarPapeleria(){
    this.crud4Service.agregarPapeleria(this.formp.value).subscribe();
    this.router.navigate(['/dashboards/papeleria'])
  }
}