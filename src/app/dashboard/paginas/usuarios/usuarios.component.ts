import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UsuariosDialogComponent } from './components/usuarios-dialog/usuarios-dialog.component';
import { Alumno } from './models';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  alumnos : Alumno[] = [
    {
      id: 1,
      nombre: 'Evelina',
      apellido: 'Nuñez',
      email: 'eve@gmail.com'
    },
    {
      id: 2,
      nombre: 'Cristina',
      apellido: 'Nuñez',
      email: 'cris@gmail.com'
    }
  ];
  formulario ='';

  constructor(
    private matDialog : MatDialog,
  ){}

  openUsuariosDialog() : void{
    this.matDialog.open(UsuariosDialogComponent)
    .afterClosed()
    .subscribe({
      next:(valor) =>{
        if(!!valor){
          this.alumnos= [
            ...this.alumnos,
            {
              ...valor, id: this.alumnos.length+1,
            }
          ];
        }
      }
    });
  }

  OnEliminaralumno ( idALumno : number) : void{
    this.alumnos = this.alumnos.filter((a) => a.id !== idALumno);
  }

  onEditaralumno ( alumno : Alumno) : void{
    this.matDialog.open(UsuariosDialogComponent,{
      data :alumno,
    });
  }
}
