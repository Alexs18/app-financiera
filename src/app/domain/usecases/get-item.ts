import { Observable } from "rxjs";
import { ModelTransacciones } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";
import { GetAllItemsEntity } from "src/app/data/repositories/entyties/transacciones.entyti";

export class GetItemuseCase{
     constructor(private _transaccionesrepo: TransaccionesRepository){
    
        }
        execute():Observable<GetAllItemsEntity>{
            return this._transaccionesrepo.getItem();
        }
}
