import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { TransaccionesRepository } from 'src/app/domain/repositories/transacciones';
import { Observable } from 'rxjs';
import { ModelTransacciones } from 'src/app/domain/models/transacciones';

@Injectable({
  providedIn: 'root'
})
export class ImplementationtransaccionesService extends TransaccionesRepository {

  constructor(
    private _http:HttpClient
  ) { 
    super()
  }
  getItem(): Observable<ModelTransacciones> {
    return this._http.get<ModelTransacciones>(`/bp/products`);
  }
  getOneItem(params: { id: number; }): Observable<ModelTransacciones> {
    return this._http
    .put<ModelTransacciones>(``,params);
  }
  createItem(params: ModelTransacciones): Observable<ModelTransacciones> {
    return this._http
    .post<ModelTransacciones>(``,params);
  }
  override deleteItem(params: { id: number; }): Observable<ModelTransacciones> {
    return this._http
    .post<ModelTransacciones>(``,params);
  }
  override updateOneItem(params: { id: number; }): Observable<ModelTransacciones> {
    return this._http
    .post<ModelTransacciones>(``,params);
  }
}
