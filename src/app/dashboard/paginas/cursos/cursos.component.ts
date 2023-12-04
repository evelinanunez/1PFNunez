import { Component, EventEmitter, Output } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  //cursos : Curso[] = [];

  cursos$ : Observable<Curso[]>;

  constructor(private cursoServicio : CursosService,
              private matDialog : MatDialog){
    this.cursos$ = this.cursoServicio.getCursos();
  }

  addCursoDialog() :void{
      this.matDialog.open(CursosDialogComponent)
      .afterClosed()
      .subscribe({
        next: (curso)=>{
          if(!!curso){
            this.cursoServicio.crearCurso(curso)
            .subscribe({
              next : ()=>{
                this.cursos$ = this.cursoServicio.getCursos();
              }
            })
          }
        }
      });
  }

  OnEditarCurso( cursoEdit : Curso) :void{
    this.matDialog.open(CursosDialogComponent, {
      data : cursoEdit,
    })
    .afterClosed()
    .subscribe({
      next :(curso)=>{
        if(!!curso){
          this.cursoServicio.editarCurso(cursoEdit.id, curso).subscribe({
            next : ()=>{
              this.cursos$ = this.cursoServicio.getCursos();
            }
          })
        }
      }
    })
  }


  OnEliminarCurso (IdcursoEliminar : number ) : void{
    this.cursoServicio.eliminarCurso(IdcursoEliminar).subscribe({
      next: ()=>{
        this.cursos$ = this.cursoServicio.getCursos();
      }
    })
  }

}
