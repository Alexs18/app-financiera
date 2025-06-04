import { Component, OnInit } from '@angular/core';
import { GetItemuseCase } from 'src/app/domain/usecases/get-item';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.sass']
})
export class TransaccionesComponent implements OnInit {

  constructor(private _getItemUseCase:GetItemuseCase) { }

  ngOnInit(): void {
  }

  start(){
    this._getItemUseCase.execute();
  }

}
