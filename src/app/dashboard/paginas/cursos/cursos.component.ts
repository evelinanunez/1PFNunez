import { Component, EventEmitter, Output } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos : Curso[] = [];


  constructor(private cursoServicio : CursosService,
              private matDialog : MatDialog){
    this.cursoServicio.traerCursos().subscribe(
      {
        next : (curso)=>{
          this.cursos= curso;
        }
      }
    )
  }

  openCursoDialog() :void{
      this.matDialog.open(CursosDialogComponent)
      .afterClosed()
      .subscribe({
        next: (curso)=>{
          if(!!curso){
            this.cursos = [
              ...this.cursos,
              {
                ...curso , id: this.cursos.length+1,
              }
            ]
          }
        }
      });
  }

  OnEliminarCurso (idCurso : number) :void {
    this.cursos = this.cursos.filter((curso)=> curso.id !==idCurso);
  }

  OnEditarCurso  (curso  : Curso) : void {
    this.matDialog
    .open(CursosDialogComponent, {
      data: curso,
    })
    .afterClosed()
    .subscribe({
      next : ((curso)=>{
        if(!!curso){
          this.cursos = this.cursos.map((c)=>
          c.id === curso.id ? {...c, ...curso} : c);
        }
      })
    });
  }
}
