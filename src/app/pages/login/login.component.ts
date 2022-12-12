import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaUsuario } from 'src/app/models/respuesta-usuario';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public usuarioService: UsuarioService, public router:Router) { }

  ngOnInit(): void {
  }

  login(correo:string,pass:string){

    this.usuarioService.login(new Usuario(0,"","",correo,"",pass)).subscribe((data:RespuestaUsuario)=>{
      if(data.codigo == 200){
        this.usuarioService.usuario = data.result[0];
        this.usuarioService.logueado = true;
        this.router.navigateByUrl('/libros')
      }
    })
  }

}
