import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './models';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  constructor() { }

  traerAlumnos() : Observable<Alumno[]>{
    return new Observable((suscriber)=>{
      suscriber.next(
        [
          {
            id: 1,
            nombre: 'Juan',
            apellido: 'Perez',
            email: 'juan@gmail.com',
            dni: '123456789A',
            telefono: 1234567890,
            fechaNacimiento: new Date('1995-05-10'),
          },
          {
            id: 2,
            nombre: 'María',
            apellido: 'López',
            email: 'maria@gmail.com',
            dni: '987654321B',
            telefono: 9876543210,
            fechaNacimiento: new Date('1990-08-20'),
          },
          {
            id: 3,
            nombre: 'Luisa',
            apellido: 'González',
            email: 'luisa@gmail.com',
            dni: '555555555C',
            telefono: 5555555555,
            fechaNacimiento: new Date('2000-02-15'),
          },
          {
            id: 4,
            nombre: 'Pedro',
            apellido: 'Fernández',
            email: 'pedro@gmail.com',
            dni: '666666666D',
            telefono: 6666666666,
            fechaNacimiento: new Date('1993-12-05'),
          },
          {
            id: 5,
            nombre: 'Ana',
            apellido: 'Martínez',
            email: 'ana@gmail.com',
            dni: '777777777E',
            telefono: 7777777777,
            fechaNacimiento: new Date('1985-04-25'),
          },
          {
            id: 6,
            nombre: 'Miguel',
            apellido: 'García',
            email: 'miguel@gmail.com',
            dni: '888888888F',
            telefono: 8888888888,
            fechaNacimiento: new Date('1998-09-30'),
          },
          {
            id: 7,
            nombre: 'Laura',
            apellido: 'Sánchez',
            email: 'laura@gmail.com',
            dni: '999999999G',
            telefono: 9999999999,
            fechaNacimiento: new Date('1992-07-18'),
          },
          {
            id: 8,
            nombre: 'Carlos',
            apellido: 'Rodríguez',
            email: 'carlos@gmail.com',
            dni: '111111111H',
            telefono: 1111111111,
            fechaNacimiento: new Date('1997-03-12'),
          },
          {
            id: 9,
            nombre: 'Cristina',
            apellido: 'Nuñez',
            email: 'cristina@gmail.com',
            dni: '222222222I',
            telefono: 2222222222,
            fechaNacimiento: new Date('1991-10-28'),
          },
          {
            id: 10,
            nombre: 'Evelina',
            apellido: 'Torres',
            email: 'evelina@gmail.com',
            dni: '333333333J',
            telefono: 3333333333,
            fechaNacimiento: new Date('1996-06-15'),
          },
        ]
      )

    })
  }
}
