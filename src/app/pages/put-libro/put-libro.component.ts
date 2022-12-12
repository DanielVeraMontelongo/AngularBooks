import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { RespuestaSQL } from 'src/app/models/respuesta-sql';
import { LibrosService } from 'src/app/shared/libros.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-put-libro',
  templateUrl: './put-libro.component.html',
  styleUrls: ['./put-libro.component.css']
})
export class PutLibroComponent implements OnInit {

  constructor(public librosService: LibrosService) { }

  ngOnInit(): void {
  }

  public putLibro(titulo:string, tipo: 'Tapa dura' | 'Tapa blanda', autor:string, precio: number, foto:string, idLibro:number){
    this.librosService.edit(new Libro(titulo,tipo,autor,precio,foto,idLibro)).subscribe((data:RespuestaSQL)=>{

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Libro modificado',
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}
