import {Observable} from 'rxjs'
import { ModelTransacciones } from '../models/transacciones';
export abstract class TransaccionesRepository {

    abstract getItem():Observable<ModelTransacciones>;
    abstract getOneItem(params:{id:number}):Observable<ModelTransacciones>
    abstract updateOneItem(params:{id:number}):Observable<ModelTransacciones>
    abstract createItem(params:ModelTransacciones):Observable<ModelTransacciones>
    abstract deleteItem(params:{id:number}):Observable<ModelTransacciones>

}
