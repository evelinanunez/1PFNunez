import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { Curso } from './models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos : Curso[] = [];

  constructor(private cursoServicio : CursosService){
    this.cursoServicio.traerCursos().subscribe(
      {
        next : (curso)=>{
          this.cursos= curso;
        }
      }
    )
  }

  openCursoDialog() :void{

  }
}
