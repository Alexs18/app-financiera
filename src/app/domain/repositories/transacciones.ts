import {Observable} from 'rxjs'
import { CreatedTransaccion, ResponseTransaccion, ModelTransacciones, ModelTransaccionesUpdate } from '../models/transacciones';
import { GetAllItemsEntity } from 'src/app/data/repositories/entyties/transacciones.entyti';
export abstract class TransaccionesRepository {

    abstract getItem():Observable<GetAllItemsEntity>;
    abstract getOneItem(params:{id:number}):Observable<ModelTransacciones>
    abstract updateOneItem(params:{id:number, data:ModelTransaccionesUpdate}):Observable<ResponseTransaccion>
    abstract createItem(params:ModelTransacciones):Observable<CreatedTransaccion>
    abstract deleteItem(params:{id:string | number}):Observable<ResponseTransaccion>

}
