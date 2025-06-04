import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransaccionesRepository } from '../domain/repositories/transacciones';
import { GetItemuseCase } from '../domain/usecases/get-item';
import { ImplementationtransaccionesService } from './repositories/transacciones/implementationtransacciones.service';
import { DeleteItemUseCase } from '../domain/usecases/delete-item';
import { UpdateItemuseCase } from '../domain/usecases/update-item';
import { CreateItemuseCase } from '../domain/usecases/create-item';
import { GetOneItemuseCase } from '../domain/usecases/get-one-item';

const GetItemuseCaseFactory = 
(transaction: TransaccionesRepository) => new GetItemuseCase(transaction);
export const getTransactionCaseProvider = {
    provide: GetItemuseCase,
    useFactory: GetItemuseCaseFactory,
    deps: [TransaccionesRepository],
};

const DeleteItemuseCaseFactory = 
(transaction: TransaccionesRepository) => new DeleteItemUseCase(transaction);
export const deleteTransactionCaseProvider = {
    provide: DeleteItemUseCase,
    useFactory: DeleteItemuseCaseFactory,
    deps: [TransaccionesRepository],
};

const UpdateuseCaseFactory = 
(transaction: TransaccionesRepository) => new UpdateItemuseCase(transaction);
export const updateTransactionCaseProvider = {
    provide: UpdateItemuseCase,
    useFactory: UpdateuseCaseFactory,
    deps: [TransaccionesRepository],
};

const CreateItemuseCaseFactory = 
(transaction: TransaccionesRepository) => new CreateItemuseCase(transaction);
export const createTransactionCaseProvider = {
    provide: CreateItemuseCase,
    useFactory: CreateItemuseCaseFactory,
    deps: [TransaccionesRepository],
};
const GetOneItemuseCaseFactory = 
(transaction: TransaccionesRepository) => new GetOneItemuseCase(transaction);
export const getOneTransactionCaseProvider = {
    provide: GetOneItemuseCase,
    useFactory: GetOneItemuseCaseFactory,
    deps: [TransaccionesRepository],
};

@NgModule({
  declarations: [],
  providers:[
    getTransactionCaseProvider,
    deleteTransactionCaseProvider,
    updateTransactionCaseProvider,
    createTransactionCaseProvider,
    getOneTransactionCaseProvider,
    {provide:TransaccionesRepository,useClass:ImplementationtransaccionesService}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }

