import { Component, OnInit, ViewChild } from '@angular/core';
import { Crud2Service } from 'src/app/services/crud2.service';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 Empleados: any;
 

  constructor(private crudService:Crud2Service){
  }
ngOnInit(): void {
  this.crudService.obtenerEmpleado().subscribe(respuesta=>{
    console.log(respuesta);
    this.Empleados= respuesta;
  });
}

 borrarEmpleados(id:any, iControl:any){
  console.log(id);
  console.log(iControl);
  if (window.confirm("Desea Borrar El Registro?")){
  this.crudService.borrarEmpleado(id).subscribe((respuesta)=>{
    this.Empleados.splice(iControl,1);
  });
}
 }

 createPDF1() {
  const documentDefinition = {
    content: [
      { text: 'Tabla de Usuarios', style: 'header' },
      '\n',
      {
        table: {
          headerRows: 1,
          widths: ['', '', '', ''],
          body: [
            ['Usuario', 'Nombre', 'Apellido', 'Sexo'],
            ...this.Empleados.map(empleado => [empleado.usuario, empleado.nombres, empleado.apellidos, empleado.sexo])
          ]
        }
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true
      }
    }
  };

  pdfMake.createPdf(documentDefinition).download('tabla.pdf');
}
createExcel() {
  const ws = XLSX.utils.json_to_sheet(this.Empleados);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Empleados');
  XLSX.writeFile(wb, 'Empleados.xlsx');
}

refreshPage(): void {
  // Recarga la página
  window.location.reload();
}
}

