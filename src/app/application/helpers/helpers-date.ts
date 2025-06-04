import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export function fechaNoPasadaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;

    if (!valor) return null;

    const fechaIngresada = moment(valor, 'YYYY-MM-DD', true);
    const hoy = moment().startOf('day');

    if (fechaIngresada.isBefore(hoy)) {
      return { fechaPasada: 'La fecha debe ser hoy o en el futuro' };
    }

    return null;
  };
}