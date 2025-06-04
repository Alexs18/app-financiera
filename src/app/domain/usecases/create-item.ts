import { ModelTransacciones } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";
import {Observable} from 'rxjs'

export class CreateItem {
    constructor(private _transaccionesrepo: TransaccionesRepository){

    }
    execute(params:ModelTransacciones):Observable<ModelTransacciones>{
        return this._transaccionesrepo.createItem(params);
    }
}
