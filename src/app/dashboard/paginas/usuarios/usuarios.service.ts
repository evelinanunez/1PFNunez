import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  traerUsuarios() : Observable<Usuario[]>{
     return new Observable((suscriber=> {
      suscriber.next(
        [
          {
            id: 1,
            nombre: 'Evelina',
            apellido: 'Nuñez',
            email: 'eve@gmail.com',
            rol: 'profesor'
          },
          {
            id: 2,
            nombre: 'Cristina',
            apellido: 'Nuñez',
            email: 'cris@gmail.com',
            rol: 'alumno'
          },
          {
            id: 3,
            nombre: 'Carlos',
            apellido: 'García',
            email: 'carlos@gmail.com',
            rol: 'administrativo'
          },
          {
            id: 4,
            nombre: 'Luis',
            apellido: 'Rodríguez',
            email: 'luis@gmail.com',
            rol: 'admin'
          },
          {
            id: 5,
            nombre: 'María',
            apellido: 'López',
            email: 'maria@gmail.com',
            rol: 'profesor'
          },
          {
            id: 6,
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan@gmail.com',
            rol: 'alumno'
          },
          {
            id: 7,
            nombre: 'Ana',
            apellido: 'Martínez',
            email: 'ana@gmail.com',
            rol: 'administrativo'
          },
          {
            id: 8,
            nombre: 'Pedro',
            apellido: 'Fernández',
            email: 'pedro@gmail.com',
            rol: 'admin'
          },
          {
            id: 9,
            nombre: 'Laura',
            apellido: 'Sánchez',
            email: 'laura@gmail.com',
            rol: 'profesor'
          },
          {
            id: 10,
            nombre: 'Manuel',
            apellido: 'González',
            email: 'manuel@gmail.com',
            rol: 'alumno'
          }
        ]
      )
     }))
  }
}
