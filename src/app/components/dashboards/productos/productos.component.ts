import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Productos: any;
  constructor( private crudService:CrudService){

  }
ngOnInit(): void {
  this.crudService.obtenerProducto().subscribe(respuesta=>{
    console.log(respuesta);
    this.Productos= respuesta;
  });
}

borrarProductos(id:any, iControl:any){
  console.log(id);
  console.log(iControl);
  if (window.confirm("Desea Borrar El Registro?")){
  this.crudService.borrarProducto(id).subscribe((respuesta)=>{
    this.Productos.splice(iControl,1);
  });
}
 }
  createPDF2() {
    const documentDefinition = {
      content: [
        { text: 'Tabla de Productos', style: 'header' },
        '\n',
        {
          table: {
            headerRows: 1,
            widths: ['', '', '', ''],
            body: [
              ['ID', 'Descripción', 'Observación', 'Proveedor'],
              ...this.Productos.map(producto => [producto.id, producto.descripcion, producto.observacion, producto.provedor])
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

    pdfMake.createPdf(documentDefinition).download('tabla_productos.pdf');
  }

  createExcel() {
    const ws = XLSX.utils.json_to_sheet(this.Productos);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Productos');
    XLSX.writeFile(wb, 'productos.xlsx');
  }
  refreshPage(): void {
    // Recarga la página
    window.location.reload();
  }
}