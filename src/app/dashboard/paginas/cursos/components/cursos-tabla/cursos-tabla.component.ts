import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-cursos-tabla',
  templateUrl: './cursos-tabla.component.html',
  styleUrls: ['./cursos-tabla.component.css']
})
export class CursosTablaComponent {

  @Input()
  dataSource : Curso[] = [];

  displayedColumns = ['id','nombre','descripcion','instructor','categoria','costo','acciones'];

  @Output()
  eliminarCurso = new EventEmitter<number>();

  @Output()
  editarCurso = new EventEmitter<Curso>();
}
