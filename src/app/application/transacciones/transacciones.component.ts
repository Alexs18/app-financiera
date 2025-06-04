import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAllItemsEntity, ProductEntity } from 'src/app/data/repositories/entyties/transacciones.entyti';
import { ModelTransacciones, ModelTransaccionesUpdate } from 'src/app/domain/models/transacciones';
import { GetItemuseCase } from 'src/app/domain/usecases/get-item';
import { erroralert, questionalert, sucessalert } from '../helpers/helpers-alerts';
import { DeleteItemUseCase } from 'src/app/domain/usecases/delete-item';
import * as moment from 'moment';
import { fechaNoPasadaValidator } from '../helpers/helpers-date';
import { CreateItemuseCase } from 'src/app/domain/usecases/create-item';
import { UpdateItemuseCase } from 'src/app/domain/usecases/update-item';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent implements OnInit {

  productoActivo: any = null;
  form: FormGroup;
  productos!: GetAllItemsEntity;
  modalAbierto = false;
  modalEdit = false;
  fechaActual = moment().format('YYYY-MM-DD');
  fechaRevision = moment().add(1, 'year').format('YYYY-MM-DD');
  constructor(
    private _getItemUseCase:GetItemuseCase,private fb: FormBuilder,
    private _deleteItemUseCase:DeleteItemUseCase,
    private _createItemUseCase:CreateItemuseCase,
    private _updateItemUseCase:UpdateItemuseCase,
  ) {
    
    this.form = this.fb.group({ 
      id: ['', [Validators.required, Validators.minLength(3)]],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(200)]],
      logo: ['', [Validators.required]],
      date_release: [this.fechaActual, [Validators.required,
        fechaNoPasadaValidator()
      ]],
      date_revision: [{
        value:moment(this.fechaActual).add(1, 'year').format('YYYY-MM-DD'),
        disabled: true
      }]
    });
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this._getItemUseCase.execute().subscribe(resp=> {
      this.productos = resp
    });
  }

  editItem(params:{id:number, data:ModelTransaccionesUpdate}){
    this._updateItemUseCase.execute(params).subscribe({
      next: (resp) => {
        if (resp.message === "Product updated successfully") {
          this.getItems();
          sucessalert('Producto actualizado exitosamente');
        } else {
          erroralert('No se pudo acualizar el item');
        }
      },
      error: (err) => {
        erroralert('Ocurrió un error. Contacte con sistemas.');
        console.error('Error:', err);
      }
    })
  }
  async askdeleteItem(product:string, id:string | number){
    const {isConfirmed} = await questionalert(`esta seguro de eliminar el producto: ${product}?`)
    if (!isConfirmed) {
      return
    }
    return this.deleteItem(id);
  }

  deleteItem(id:string | number){

    this._deleteItemUseCase.execute({id}).subscribe({
      next: (resp) => {
        if (resp.message === "Product removed successfully") {
          this.getItems();
          sucessalert('Producto eliminado exitosamente');
        } else {
          erroralert('No se pudo eliminar el item');
        }
      },
      error: (err) => {
        erroralert('Ocurrió un error. Contacte con sistemas.');
        console.error('Error:', err);
      }
    })
  }

  createItem(data: ModelTransacciones): void {
    this._createItemUseCase.execute(data).subscribe({
      next: (resp) => {
        if (resp.message === 'Product added successfully') {
          this.getItems();
          sucessalert('ITEM CREADO EXITOSAMENTE');
        } else {
          erroralert('No se pudo crear el item');
        }
      },
      error: (err) => {
        erroralert('Ocurrió un error. Contacte con sistemas.');
        console.error('Error:', err);
      }
    });
  }
  onSubmit(): void {

    if (this.form.valid) {
      !this.modalEdit?this.createItem(this.form.getRawValue()):
      this.editItem({id:this.form.get('id')?.value, data:this.form.getRawValue()});
    } else {
      this.form.markAllAsTouched();
    }
  }

  onReset(): void {
    this.form.reset({
      nombre: '',
      fechaLiberacion: '',
      fechaRevision: { value: '', disabled: true }
    });
  }

  campoInvalido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.invalid && control.touched;
  }

  getError(campo: string): string {
    const control = this.form.get(campo);
    
    if (!control || !control.errors) return '';
    if (control.errors['required']) return 'Este campo es obligatorio.';
    if (control.errors['minlength']) {
      return `Mínimo ${control.errors['minlength'].requiredLength} caracteres.`;
    }
    if (control.errors['maxlength']) {
      return `Maximo ${control.errors['maxlength'].requiredLength} caracteres.`;
    }
    if (control.errors['pattern']) {
      if (campo === 'logo') return 'Debe ser una URL de imagen válida.';
    }
    if (control.errors['fechaPasada']) return 'La fecha debe ser hoy o en el futuro';

    return 'Campo inválido.';
  }
   
  abrirModal(): void {
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.modalEdit = false;
  }
  abrirModalEdit(producto:ProductEntity){
    this.modalAbierto = true;
    this.modalEdit = true;
    this.form.get('id')?.disable();
    this.setearproductedit(producto);
  }

  setearproductedit(producto:ProductEntity){
    this.form.patchValue(producto);
  }
  changedate(date:string){
    this.form.patchValue({
      date_revision:moment(this.form.get('date_release')?.value).add(1, 'year').format('YYYY-MM-DD')
    })
  }


  toggleDropdown(producto: any): void {
    this.productoActivo = this.productoActivo === producto ? null : producto;
  }


}
