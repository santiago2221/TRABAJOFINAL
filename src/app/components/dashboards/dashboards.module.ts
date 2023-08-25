import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardsComponent } from './dashboards.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { MaquillajeComponent } from './maquillaje/maquillaje.component';
import { CrearMaquillajeComponent } from './maquillaje/crear-maquillaje/crear-maquillaje.component';
import { PapeleriaComponent } from './papeleria/papeleria.component';
import { CrearPapeleriaComponent } from './papeleria/crear-papeleria/crear-papeleria.component';
import { AcercadeComponent } from './acercade/acercade.component';


@NgModule({
  declarations: [
    DashboardsComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    ProductosComponent,
    CrearUsuarioComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    MaquillajeComponent,
    CrearMaquillajeComponent,
    PapeleriaComponent,
    CrearPapeleriaComponent,
    AcercadeComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    SharedModule
  ]
})
export class DashboardsModule { }
