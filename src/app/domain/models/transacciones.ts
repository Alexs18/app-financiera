export interface ModelTransacciones {
     id: string | number;
     name: string;
     description: string;
     logo: string;
     date_release: Date;
     date_revision: Date;
}

export interface CreatedTransaccion {

     message:string,
     data:ModelTransacciones

}

export interface ResponseTransaccion{
     message:string
}

export interface ModelTransaccionesUpdate {
     name: string;
     description: string;
     logo: string;
     date_release: Date;
     date_revision: Date;
}