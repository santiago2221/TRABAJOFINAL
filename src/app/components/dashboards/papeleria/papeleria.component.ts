import { Component, OnInit, ViewChild } from '@angular/core';
import { Crud4Service } from 'src/app/services/crud4.service';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-papeleria',
  templateUrl: './papeleria.component.html',
  styleUrls: ['./papeleria.component.css']
})
export class PapeleriaComponent implements OnInit{

  Papeleria: any;
  constructor( private crud4Service:Crud4Service){

  }
ngOnInit(): void {
  this.crud4Service.obtenerPapeleria().subscribe(respuesta=>{
    console.log(respuesta);
    this.Papeleria= respuesta;
  });
}

borrarPapeleria(id:any, iControl:any){
  console.log(id);
  console.log(iControl);
  if (window.confirm("Desea Borrar El Registro?")){
  this.crud4Service.borrarPapeleria(id).subscribe((respuesta)=>{
    this.Papeleria.splice(iControl,1);
  });
}
 }
 editarPapeleria(){

 }

 createPDF2() {
  const documentDefinition = {
    content: [
      { text: 'Tabla de papeleria', style: 'header' },
      '\n',
      {
        table: {
          headerRows: 1,
          widths: ['', '', '', ''],
          body: [
            ['ID', 'producto', 'categoria', 'provedor'],
            ...this.Papeleria.map(papeleria => [papeleria.id, papeleria.producto, papeleria.categoria, papeleria.provedor])
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

  pdfMake.createPdf(documentDefinition).download('tabla_papeleria.pdf');
}

createExcel() {
  const ws = XLSX.utils.json_to_sheet(this.Papeleria);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Papeleria');
  XLSX.writeFile(wb, 'Papeleria.xlsx');
}
refreshPage(): void {
  // Recarga la página
  window.location.reload();
}
}