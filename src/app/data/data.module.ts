import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransaccionesRepository } from '../domain/repositories/transacciones';
import { GetItemuseCase } from '../domain/usecases/get-item';
import { ImplementationtransaccionesService } from './repositories/transacciones/implementationtransacciones.service';

const GetItemuseCaseFactory = 
(transaction: TransaccionesRepository) => new GetItemuseCase(transaction);
export const getTransactionCaseProvider = {
    provide: GetItemuseCase,
    useFactory: GetItemuseCaseFactory,
    deps: [TransaccionesRepository],
};


@NgModule({
  declarations: [],
  providers:[
    getTransactionCaseProvider,
    {provide:TransaccionesRepository,useClass:ImplementationtransaccionesService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }

