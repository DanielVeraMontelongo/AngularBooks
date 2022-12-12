import { Component, OnInit } from '@angular/core';
import { RespuestaUsuario } from 'src/app/models/respuesta-usuario';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  constructor(public usuarioService:UsuarioService) {
    
   }

  ngOnInit(): void {
  }

  registro(nombre:string,apellido:string,correo:string,pass1:string,pass2:string){
    
    if(pass1 == pass2){
      this.usuarioService
      .register(new Usuario(0,nombre,apellido,correo,"",pass1))
      .subscribe((data:RespuestaUsuario)=>{
        console.log(data);
      })
    }
    else{
      console.log("Las contraseñas no coinciden");
      
    }
  }
}
