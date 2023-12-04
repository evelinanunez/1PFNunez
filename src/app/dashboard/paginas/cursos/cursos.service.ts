import { Injectable } from '@angular/core';
import { Observable, Subscriber, concatMap } from 'rxjs';
import { Curso } from './models';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuarios/models';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient : HttpClient) {

   }

  getCursos(): Observable <Curso[]>{
    return this.httpClient.get<Curso[]>(`http://localhost:3000/cursos`)
  }


  crearCurso( cursoAdd : Curso) : Observable<Curso>{
    return this.httpClient
            .post<Curso>(`http://localhost:3000/cursos`,cursoAdd);

  }

  editarCurso ( cursoId : number,cursoEditar : Curso) : Observable <Curso>{
    return this.httpClient
    .put<Curso>(`http://localhost:3000/cursos/${cursoId}`, cursoEditar);
  }

  eliminarCurso( idCursoAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`http://localhost:3000/cursos/${idCursoAEliminar}`);
  }


}
