import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginPayload } from './paginas/models';
import { Usuario } from '../dashboard/paginas/usuarios/models';
import { UsuarioLogin } from './models';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private _authUser$ = new BehaviorSubject<Usuario | null>(null);

   public authUser$ = this._authUser$.asObservable();

  constructor( private router: Router, private httpClient : HttpClient, private store :Store) {}

  // login(): Observable<Usuario> {

  //   const usuario: Usuario = {
  //     id: 1,
  //     nombre: 'Evelina',
  //     apellido: 'Nuñez',
  //     email: 'e@mail.com',
  //     rol: 'admin'
  //   }
  //   this._authUser$.next(usuario);
  //   return of<Usuario>(usuario);

  // }

  private handleAuthUser(authUser: Usuario): void {
    this.store.dispatch(AuthActions.actualizarUsuario({ data: authUser }));
    //localStorage.setItem('token', authUser.token);
  }

  login(usuarioLogin :UsuarioLogin ){
    console.log(usuarioLogin);
    this.httpClient.get<Usuario[]>(`http://localhost:3000/usuarios?email=${usuarioLogin.email}&password=${usuarioLogin.password}`)
    .subscribe({
      next: (respuesta)=>{
        if(!respuesta.length){
          alert('Usuario o contaseña invalidos');
        }else{
          const usuarioLogueado = respuesta[0];
          console.log(usuarioLogueado)
           // this.handleAuthUser(usuarioLogueado);
           this._authUser$.next(usuarioLogueado);
          this.router.navigate(['/dashboard/home']);
        }
      },
      error: (error)=>{
        alert('Error de conexion');
      }
    });
  }

  logout(): void {
    this._authUser$.next(null);
    this.router.navigate(['/auth/login']);
  }
}
