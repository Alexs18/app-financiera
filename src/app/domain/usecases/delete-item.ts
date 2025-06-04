import { Observable } from "rxjs";
import { ResponseTransaccion, ModelTransacciones } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";

export class DeleteItemUseCase {
     constructor(private _transaccionesrepo: TransaccionesRepository){
    
        }
        execute(params:{id:string | number}):Observable<ResponseTransaccion>{
            return this._transaccionesrepo.deleteItem(params);
        }
}
