import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/dashboard/paginas/usuarios/models';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    console.log('Value',value);
;    return value.nombre + ' ' + value.apellido;
  }

}
