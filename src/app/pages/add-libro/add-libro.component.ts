import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { RespuestaSQL } from 'src/app/models/respuesta-sql';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  constructor( public librosService: LibrosService, public usuarioService:UsuarioService) { 
    
  }

  ngOnInit(): void {
  }

  public pushLibro(titulo:string, tipo: 'Tapa dura' | 'Tapa blanda', autor:string, precio: number, foto:string):void{
    this.librosService.add(new Libro(titulo,tipo,autor,precio,foto,0,this.usuarioService.usuario.id_usuario)).subscribe((data:RespuestaSQL)=>{
      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Libro guardado con el id ' + data.result.insertId,
        showConfirmButton: false,
        timer: 1500
      })
    })
  }
}
