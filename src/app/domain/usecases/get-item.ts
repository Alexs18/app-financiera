import { Observable } from "rxjs";
import { ModelTransacciones } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";

export class GetItemuseCase{
     constructor(private _transaccionesrepo: TransaccionesRepository){
    
        }
        execute():Observable<ModelTransacciones>{
            console.log('vemos que si se ejecuta....');
            return this._transaccionesrepo.getItem();
        }
}
