import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = "http://localhost:3000/";
  public logueado:boolean;
  public usuario:Usuario;
  constructor(private http: HttpClient) { 
    this.logueado = false;
  }

  public register(usuario:Usuario){
    return this.http.post(this.url + "registro", usuario);
  }

  public login(usuario:Usuario){
    return this.http.post(this.url + "login", usuario)
  }
}
