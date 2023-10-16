import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../models';


@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html'
})
export class UsuariosTableComponent {
  @Input()
  dataSource : Alumno[]= [];
  //Nombre de las columnas de mi tabla
  displayedColumns = ['id','nombrecompleto', 'email', 'acciones'];

  @Output()
  eliminarAlumno = new EventEmitter<number>();

  @Output()
  editarAlumno = new EventEmitter<Alumno>();
}










