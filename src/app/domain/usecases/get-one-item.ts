import { Observable } from "rxjs";
import { TransaccionesRepository } from "../repositories/transacciones";
import { ModelTransacciones } from "../models/transacciones";

export class GetOneItemuseCase {
     constructor(private _transaccionesrepo: TransaccionesRepository){
    
        }
        execute(params:{id:number}):Observable<ModelTransacciones>{
            return this._transaccionesrepo.getOneItem(params);
        }
}
