import { Component } from '@angular/core';
import { Alumno } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosDialogComponent } from './componentes/alumnos-dialog/alumnos-dialog.component';
import { AlumnosService } from './alumnos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html'
})
export class AlumnosComponent {

  alumnos$ : Observable <Alumno[]>;
  //alumnos : Alumno[] = [];

  constructor (private matDialog : MatDialog,
               private alumnoServicio : AlumnosService
    ){

      this.alumnos$ = this.alumnoServicio.getAlumnos();
  // this.alumnos$ = alumnoServicio.traerAlumnos();

  // this.alumnoServicio.traerAlumnos().subscribe({
  //   next :(v) =>{
  //     this.alumnos = v;
  //   },
  //   error :()=>{},
  //   complete: ()=>{},
  // });
  }

  addAlumnosDialog() :void {
    this.matDialog.open(AlumnosDialogComponent)
    .afterClosed()
    .subscribe({
      next:(alumno)=>{
        if(!!alumno){
          this.alumnoServicio.crearAlumno(alumno)
          .subscribe({
            next : ()=>{
              this.alumnos$= this.alumnoServicio.getAlumnos();
            }
          })
        }
        // if(!! valor){
        //   this.alumnos = [
        //     ...this.alumnos,
        //     {
        //       ...valor, id: this.alumnos.length+1,
        //     }
        //   ]
        // }
      }
    });
  }
  OnEliminarAlumno ( idALumno : number) : void{
    this.alumnoServicio.eliminarAlumno(idALumno).subscribe({
      next: ()=>{
        this.alumnos$ = this.alumnoServicio.getAlumnos();
      }
    });
    // this.alumnos = this.alumnos.filter((a) => a.id !== idALumno);
  }

  OnEditarAlumno ( alumnoEdit : Alumno) : void{
    this.matDialog
    .open(AlumnosDialogComponent,{
      data :alumnoEdit,
    })
    .afterClosed()
    .subscribe({
      next:(alumno) =>{
        if(!!alumno){
          this.alumnoServicio.editarAlumno(alumnoEdit.id,alumno)
          .subscribe({
            next : ()=>{
              this.alumnos$= this.alumnoServicio.getAlumnos();
            }
          })
        }

        // if(!!v){
        //   this.alumnos =  this.alumnos.map((u)=>
        //   u.id === alumno.id ? { ...u, ...v } : u);

        // }
      }
    });
  }

}
