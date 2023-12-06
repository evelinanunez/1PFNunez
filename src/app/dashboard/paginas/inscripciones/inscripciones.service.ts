import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inscripcion } from "./models";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class InscripcionesService{

  constructor( private httpClient : HttpClient){

  }
  getInscripciones():Observable<Inscripcion[]>{
    return this.httpClient.get<Inscripcion[]>(`http://localhost:3000/inscripciones?_expand=curso&_expand=alumno`)
  }

  crearIncripcion(inscripcionAdd : Inscripcion) : Observable<Inscripcion>{
    return this.httpClient
    .post<Inscripcion>(`http://localhost:3000/inscripciones`,inscripcionAdd);
  }

  editarInscripcion ( InscripcionId : number,InscripcionEditar : Inscripcion) : Observable <Inscripcion>{
    return this.httpClient
    .put<Inscripcion>(`http://localhost:3000/inscripciones/${InscripcionId}`, InscripcionEditar);
  }

  eliminarInscripcion( idInscripcionAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`http://localhost:3000/inscripciones/${idInscripcionAEliminar}`);
  }
}
