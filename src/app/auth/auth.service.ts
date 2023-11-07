import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginPayload } from './paginas/models';
import { Usuario } from '../dashboard/paginas/usuarios/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private _authUser$ = new BehaviorSubject<Usuario | null>(null);

   public authUser$ = this._authUser$.asObservable();

  constructor( private router: Router) {}

  login(): Observable<Usuario> {

    const usuario: Usuario = {
      id: 1,
      nombre: 'Evelina',
      apellido: 'Nuñez',
      email: 'e@mail.com',
      rol: 'admin'
    }
    this._authUser$.next(usuario);
    return of<Usuario>(usuario);

  }

}
