import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-tabla',
  templateUrl: './alumnos-tabla.component.html'
})
export class AlumnosTablaComponent {


  constructor( private router : Router){

  }
  @Input()
  dataSource: Alumno[]= [];

  displayedColumns = ['id','nombrecompleto', 'email','dni','telefono' /*,'fechaNacimiento'*/, 'acciones'];

  @Output()
  eliminarAlumno = new EventEmitter<number>();

  @Output()
  editarAlumno = new EventEmitter<Alumno>();

  verDetalle( usuarioId : number): void{
    this.router.navigate(['dashboard','alumnos','detalle', usuarioId]);
  }
}
