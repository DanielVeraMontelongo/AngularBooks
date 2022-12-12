import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = "https://api-books-production-9466.up.railway.app/";
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
