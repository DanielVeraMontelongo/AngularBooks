import { Usuario } from "./usuario";

export class RespuestaUsuario {
    public codigo:number;
    public error:boolean;
    public result: Usuario[];
}
