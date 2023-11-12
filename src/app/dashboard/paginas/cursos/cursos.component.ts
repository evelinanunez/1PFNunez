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
    // this.cursoServicio.traerCursos().subscribe(
    //   {
    //     next : (curso)=>{
    //       this.cursos= curso;
    //     }
    //   }
    // )
    this.cursos$ = this.cursoServicio.getCursos();
  }

  addCursoDialog() :void{
      this.matDialog.open(CursosDialogComponent)
      .afterClosed()
      .subscribe({
        next: (curso)=>{
          if(!!curso){
            // this.cursos = [
            //   ...this.cursos,
            //   {
            //     ...curso , id: this.cursos.length+1,
            //   }
            // ]
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



  // OnEditarCurso  (curso  : Curso) : void {
  //   this.matDialog
  //   .open(CursosDialogComponent, {
  //     data: curso,
  //   })
  //   .afterClosed()
  //   .subscribe({
  //     next : ((curso)=>{
  //       if(!!curso){
  //         this.cursos = this.cursos.map((c)=>
  //         c.id === curso.id ? {...c, ...curso} : c);
  //       }
  //     })
  //   });
  // }
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

  // OnEliminarCurso (idCurso : number) :void {
  //   this.cursos$ = this.cursos$.filter((curso)=> curso.id !==idCurso);
  // }

  OnEliminarCurso (IdcursoEliminar : number ) : void{
    this.cursoServicio.eliminarCurso(IdcursoEliminar).subscribe({
      next: ()=>{
        this.cursos$ = this.cursoServicio.getCursos();
      }
    })
  }

}
