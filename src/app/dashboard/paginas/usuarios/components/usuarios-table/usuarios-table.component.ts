import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../models';



@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html'
})
export class UsuariosTableComponent {
  @Input()
  dataSource : Usuario[]= [];
  //Nombre de las columnas de mi tabla
  displayedColumns = ['id','nombre','apellido', 'email', 'acciones'];

  @Output()
  eliminarUsuario = new EventEmitter<number>();

  @Output()
  editarUsuario = new EventEmitter<Usuario>();
}










