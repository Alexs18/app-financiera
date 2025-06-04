import { Observable } from "rxjs";
import { ModelTransacciones, ModelTransaccionesUpdate, ResponseTransaccion } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";

export class UpdateItemuseCase {
     constructor(private _transaccionesrepo: TransaccionesRepository){
    
        }
        execute(params:{id:number, data:ModelTransaccionesUpdate}):Observable<ResponseTransaccion>{
            return this._transaccionesrepo.updateOneItem(params);
        }
}
