import { Component } from '@angular/core';
import { Alumno } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './componentes/alumnos-dialog/alumnos-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html'
})
export class AlumnosComponent {
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

  constructor (private matDialog : MatDialog){}

  openAlumnosDialog() :void {
    this.matDialog.open(AlumnosDialogComponent)
    .afterClosed()
    .subscribe({
      next:(valor)=>{
        if(!! valor){
          this.alumnos = [
            ...this.alumnos,
            {
              ...valor, id: this.alumnos.length+1,
            }
          ]
        }
      }
    });
  }
  OnEliminarAlumno ( idALumno : number) : void{
    this.alumnos = this.alumnos.filter((a) => a.id !== idALumno);
  }

  onEditarAlumno ( alumno : Alumno) : void{
    this.matDialog
    .open(AlumnosDialogComponent,{
      data :alumno,
    })
    .afterClosed()
    .subscribe({
      next:(v) =>{
        if(!!v){
          this.alumnos = this.alumnos.map((u)=>
          u.id === alumno.id ? { ...u, ...v } : u);

        }
      }
    });
  }

}
