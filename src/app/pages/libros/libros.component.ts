import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { RespuestaLibros } from 'src/app/models/respuesta-libros';
import { RespuestaSQL } from 'src/app/models/respuesta-sql';
import { LibrosService } from 'src/app/shared/libros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro [];
  constructor(public librosService:LibrosService) { 
   
    this.libros = []
    this.buscarTodos();
  }

  ngOnInit(): void {
  }

  private buscarTodos():void{
    this.librosService.getAll().subscribe((data:RespuestaLibros)=>{
      console.log(data);
      this.libros = data.result;
    })
  }

  private buscarUno(id:number):void{
    this.librosService.getOne(id).subscribe((data:RespuestaLibros)=>{
      console.log(data);
      this.libros = data.result;
    })
  }

  public buscar(id:HTMLInputElement):void{

    let idLibro:number = id.valueAsNumber
  
    if(idLibro){
      this.buscarUno(idLibro);
    }
    else{
      this.buscarTodos();
    }
  }



  public borrar(id:number){
    
    this.librosService.delete(id).subscribe((data:RespuestaSQL)=>{
      console.log(data);
      
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Libro eliminado con el id: ' + id,
        showConfirmButton: false,
        timer: 1500
      })

      let i = 0;
      while(i<this.libros.length && this.libros[i].id_libro != id){
        i++;
      }
      if(i<this.libros.length){
        this.libros.splice(i,i+1);
      }
    })

  }
}
