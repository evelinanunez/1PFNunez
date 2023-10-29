import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../models';

@Component({
  selector: 'app-alumnos-tabla',
  templateUrl: './alumnos-tabla.component.html'
})
export class AlumnosTablaComponent {
  @Input()
  dataSource: Alumno[]= [];

  displayedColumns = ['id','nombrecompleto', 'email','dni','telefono' /*,'fechaNacimiento'*/, 'acciones'];

  @Output()
  eliminarAlumno = new EventEmitter<number>();

  @Output()
  editarAlumno = new EventEmitter<Alumno>();
}
