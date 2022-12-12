import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  // private libros: Libro[];
  private url:string = "http://localhost:3000/libros"
  constructor(private http: HttpClient, private usuarioService:UsuarioService) { 
    // this.libros = [      
    //   new Libro("El señor de los anillos", "Tapa dura", "John Ronald Reuel Tolkien", 50,"https://m.media-amazon.com/images/I/51rETBglWcL.jpg",1,1),
    //   new Libro("La espada del destino", "Tapa dura", "Andrzej Sapkowski", 15,"https://imagessl3.casadellibro.com/a/l/t5/33/9788498890433.jpg",2,1),
    //   new Libro("Es fácil dejar de fumar, si sabes cómo", "Tapa blanda","Allen Carr",12.25,"https://m.media-amazon.com/images/I/41+QRYdFunS.jpg",3,1),
    //   new Libro("Harry Potter y la piedra filosofal ", "Tapa blanda","J. K. Rowling",14.25,"https://m.media-amazon.com/images/I/51uxZ1EkT4L.jpg",4,1),
    //   new Libro("Harry Potter y la piedra filosofal ", "Tapa blanda","J. K. Rowling",14.25,"https://m.media-amazon.com/images/I/51uxZ1EkT4L.jpg",5,1)
    // ]
  }

  public getAll():Observable<Object>{
    return this.http.get(this.url + `?id_usuario=${this.usuarioService.usuario.id_usuario}`);
  }

  public getOne(id_libro: number):Observable<Object>{
    return this.http.get(this.url + 
      `?id_usuario=${this.usuarioService.usuario.id_usuario}&id_libro=${id_libro}`);
  }

  public add(libro: Libro):Observable<Object>{
    return this.http.post(this.url,libro);
  }

  public edit(libro: Libro):Observable<Object>{

    return this.http.put(this.url,libro);
  }

  public delete(id_libro: number):Observable<Object>{
  //   let i = 0;

  //   while(i<this.libros.length && this.libros[i].id_libro != id_libro){
  //     i++;
  //   }

  //   if(i<this.libros.length){
  //     this.libros.splice(i,i+1);
  //     return true
  //   }else{
  //     return false;
  //   }
    return this.http.request('delete',this.url,{body:{id_libro:id_libro}})
  }
}
