import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../models';
import { Router } from '@angular/router';



@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html'
})
export class UsuariosTableComponent {

  constructor( private router : Router){

  }
  @Input()
  dataSource : Usuario[]= [];
  //Nombre de las columnas de mi tabla
  displayedColumns = ['id','nombre','apellido', 'email','rol', 'acciones'];

  @Output()
  eliminarUsuario = new EventEmitter<number>();

  @Output()
  editarUsuario = new EventEmitter<Usuario>();

  verDetalle( usuarioId : number): void{
    this.router.navigate(['dashboard','usuarios','detalle', usuarioId]);
  }
}










