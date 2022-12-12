import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario: Usuario;
  constructor() {
    this.usuario = new Usuario(0,"Carlos", "González","carlos@gmail.com","https://i0.wp.com/www.periodismo.com/wp-content/subid/6-1-1.jpg?resize=696%2C696&ssl=1","123456789")
   }

  ngOnInit(): void {
  }

  public cambiarDatos(nombre: string = "", apellidos: string = "", correo: string = "", url: string = ""){

    this.usuario.nombre    =  nombre    != ""?  nombre    : this.usuario.nombre;
    this.usuario.apellidos =  apellidos != ""?  apellidos : this.usuario.apellidos;
    this.usuario.correo    =  correo    != ""?  correo    : this.usuario.correo;
    this.usuario.url       =  url       != ""?  url       : this.usuario.url;
  }

}
