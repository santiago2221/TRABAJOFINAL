import { Component, OnInit, ViewChild } from '@angular/core';
import { Crud3Service } from 'src/app/services/crud3.service';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-maquillaje',
  templateUrl: './maquillaje.component.html',
  styleUrls: ['./maquillaje.component.css']
})
export class MaquillajeComponent implements OnInit{
  Maquillaje: any;
  constructor( private crud3Service:Crud3Service){

  }
ngOnInit(): void {
  this.crud3Service.obtenerMaquillaje().subscribe(respuesta=>{
    console.log(respuesta);
    this.Maquillaje= respuesta;
  });
}

borrarMaquillaje(id:any, iControl:any){
  console.log(id);
  console.log(iControl);
  if (window.confirm("Desea Borrar El Registro?")){
  this.crud3Service.borrarMaquillaje(id).subscribe((respuesta)=>{
    this.Maquillaje.splice(iControl,1);
  });
}
 }
 editarMaquillaje(){

 }

 createPDF2() {
  const documentDefinition = {
    content: [
      { text: 'Tabla de Maquillaje', style: 'header' },
      '\n',
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            ['ID', 'nombre', 'descripcion', 'proveedor'],
            ...this.Maquillaje.map(maquillaje => [maquillaje.id, maquillaje.nombre, maquillaje.descripcion, maquillaje.provedor])
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

  pdfMake.createPdf(documentDefinition).download('tabla_maquillaje.pdf');
}

createExcel() {
  const ws = XLSX.utils.json_to_sheet(this.Maquillaje);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Maquillaje');
  XLSX.writeFile(wb, 'Maquillaje.xlsx');
}
refreshPage(): void {
  // Recarga la página
  window.location.reload();
}
}
 
