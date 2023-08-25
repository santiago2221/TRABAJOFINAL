import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardsComponent } from './dashboards.component';
import { InicioComponent } from './inicio/inicio.component';
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

const routes: Routes = [
  {path: '', component: DashboardsComponent, children: [
    { path: '', component: InicioComponent},
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'crear-usuario', component: CrearUsuarioComponent},
    { path: 'crear-producto', component: CrearProductoComponent},
    { path: 'editar-producto/:id', component: EditarProductoComponent},
    { path: 'maquillaje', component: MaquillajeComponent},
    { path: 'crear-maquillaje', component: CrearMaquillajeComponent},
    { path: 'papeleria', component: PapeleriaComponent},
    { path: 'crear-papeleria', component: CrearPapeleriaComponent},
    { path: 'acercade', component: AcercadeComponent},
   
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsRoutingModule { }
