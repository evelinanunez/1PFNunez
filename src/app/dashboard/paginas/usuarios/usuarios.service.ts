import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
              private httpClient : HttpClient
  ) { }

  traerUsuarios() : Observable<Usuario[]>{
     return this.httpClient.get<Usuario[]>(`http://localhost:3000/usuarios`)
  }


  crearUsuario( usuarioAdd : Usuario) : Observable<Usuario>{
    return this.httpClient
    .post<Usuario>(`http://localhost:3000/usuarios`,usuarioAdd);
  }

  editarUsuario( usuarioId : number,usuarioEditar : Usuario) : Observable <Usuario>{
    return this.httpClient
    .put<Usuario>(`http://localhost:3000/usuarios/${usuarioId}`, usuarioEditar);
  }

  eliminarUsuario( idUsuarioAEliminar : number) :  Observable <void>{
    return this.httpClient
    .delete<void>(`http://localhost:3000/usuarios/${idUsuarioAEliminar}`);
  }
}
