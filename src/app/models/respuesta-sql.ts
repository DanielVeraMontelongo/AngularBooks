export class RespuestaSQL {
    public codigo:number;
    public error:boolean;
    public result: {
        affectedRows: number,
        fieldCount: number,
        info: string,
        insertId: number,
        serverStatus: number,
        warningStatus: number
    }
}
