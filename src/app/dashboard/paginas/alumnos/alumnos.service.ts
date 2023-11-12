import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './models';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  constructor(private  httpClient : HttpClient) {

  }

  getAlumnos() :Observable<Alumno[]>{
  return this.httpClient.get<Alumno[]>(`http://localhost:3000/alumnos`);
  }

  crearAlumno (AlumnoAdd : Alumno) : Observable <Alumno>{
      return this.httpClient.post<Alumno>(`http://localhost:3000/alumnos`,AlumnoAdd);
  }

  editarAlumno (idAlumnoEditar : number, AlumnoEditar : Alumno) : Observable<Alumno>{
    return this.httpClient.put<Alumno>(`http://localhost:3000/alumnos/${idAlumnoEditar}`, AlumnoEditar);
  }

  eliminarAlumno( idAlumnoAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`http://localhost:3000/alumnos/${idAlumnoAEliminar}`);
  }
}
