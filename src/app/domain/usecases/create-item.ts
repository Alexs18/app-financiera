import { CreatedTransaccion, ModelTransacciones } from "../models/transacciones";
import { TransaccionesRepository } from "../repositories/transacciones";
import {Observable} from 'rxjs'

export class CreateItemuseCase {
    constructor(private _transaccionesrepo: TransaccionesRepository){

    }
    execute(params:ModelTransacciones):Observable<CreatedTransaccion>{
        return this._transaccionesrepo.createItem(params);
    }
}
