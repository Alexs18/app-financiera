import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { TransaccionesRepository } from 'src/app/domain/repositories/transacciones';
import { Observable } from 'rxjs';
import { CreatedTransaccion, ResponseTransaccion, ModelTransacciones, ModelTransaccionesUpdate } from 'src/app/domain/models/transacciones';
import { GetAllItemsEntity } from '../entyties/transacciones.entyti';

@Injectable({
  providedIn: 'root'
})
export class ImplementationtransaccionesService extends TransaccionesRepository {

  constructor(
    private _http:HttpClient
  ) { 
    super()
  }
  getItem(): Observable<GetAllItemsEntity> {
    return this._http.get<GetAllItemsEntity>(`/bp/products`);
  }
  getOneItem(params: { id: number; }): Observable<ModelTransacciones> {
    return this._http
    .put<ModelTransacciones>(``,params);
  }
  createItem(params: ModelTransacciones): Observable<CreatedTransaccion> {
    return this._http
    .post<CreatedTransaccion>(`/bp/products`,params);
  }
  override deleteItem(params: { id: number; }): Observable<ResponseTransaccion> {
    return this._http
    .delete<ResponseTransaccion>(`/bp/products/${params.id}`);
  }
  override updateOneItem(params: { id: number, data:ModelTransaccionesUpdate }): Observable<ResponseTransaccion> {
    return this._http
    .put<ResponseTransaccion>(`/bp/products/${params.id}`,params);
  }
}
