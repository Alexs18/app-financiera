import { Observable } from "rxjs";
import { ModelTransacciones } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";

export class UpdateItem {
     constructor(private _transaccionesrepo: TransaccionesRepository){
    
        }
        execute(params:{id:number}):Observable<ModelTransacciones>{
            return this._transaccionesrepo.updateOneItem(params);
        }
}
