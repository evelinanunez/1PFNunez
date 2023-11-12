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

  //      return new Observable((Subscriber)=>{
  //       Subscriber.next(
  //       [
  //         {
  //           id: 1,
  //           nombre: 'Programación Web Avanzada',
  //           descripcion: 'Aprende a desarrollar aplicaciones web avanzadas con las últimas tecnologías.',
  //           instructor: 'Ana Gómez',
  //           duracionHoras: 60,
  //           fechaInicio: new Date('2023-03-01'),
  //           fechaFin: new Date('2023-04-30'),
  //           cupoMaximo: 50,
  //           costo: 199.99,
  //           nivel: 'Avanzado',
  //           categoria: 'Desarrollo Web',
  //           requisitos: ['Conocimientos previos de HTML, CSS y JavaScript.']
  //         },
  //         {
  //           id: 2,
  //           nombre: 'Inglés Intermedio',
  //           descripcion: 'Mejora tus habilidades en inglés y avanza al nivel intermedio.',
  //           instructor: 'John Smith',
  //           duracionHoras: 40,
  //           fechaInicio: new Date('2023-02-15'),
  //           fechaFin: new Date('2023-04-15'),
  //           cupoMaximo: 30,
  //           costo: 149.99,
  //           nivel: 'Intermedio',
  //           categoria: 'Idiomas',
  //           requisitos: ['Nivel básico de inglés.']
  //         },
  //         {
  //           id: 3,
  //           nombre: 'Cálculo Avanzado',
  //           descripcion: 'Explora conceptos avanzados de cálculo y análisis matemático.',
  //           instructor: 'Luis Rodríguez',
  //           duracionHoras: 50,
  //           fechaInicio: new Date('2023-03-10'),
  //           fechaFin: new Date('2023-05-10'),
  //           cupoMaximo: 40,
  //           costo: 179.99,
  //           nivel: 'Avanzado',
  //           categoria: 'Matemáticas',
  //           requisitos: ['Conocimientos previos de cálculo básico.']
  //         },
  //         {
  //           id: 4,
  //           nombre: 'Estrategias de Marketing en Redes Sociales',
  //           descripcion: 'Aprende a promocionar productos y servicios en redes sociales.',
  //           instructor: 'María López',
  //           duracionHoras: 35,
  //           fechaInicio: new Date('2023-02-20'),
  //           fechaFin: new Date('2023-04-05'),
  //           cupoMaximo: 25,
  //           costo: 129.99,
  //           nivel: 'Intermedio',
  //           categoria: 'Marketing',
  //           requisitos: ['Conocimientos básicos de marketing digital.']
  //         },
  //         {
  //           id: 5,
  //           nombre: 'Fotografía de Naturaleza',
  //           descripcion: 'Domina las técnicas de fotografía de la naturaleza y la vida silvestre.',
  //           instructor: 'Carlos García',
  //           duracionHoras: 45,
  //           fechaInicio: new Date('2023-03-05'),
  //           fechaFin: new Date('2023-04-30'),
  //           cupoMaximo: 20,
  //           costo: 169.99,
  //           nivel: 'Intermedio',
  //           categoria: 'Fotografía',
  //           requisitos: ['Cámara digital con ajustes manuales.']
  //         },
  //         {
  //           id: 6,
  //           nombre: 'Python para Principiantes',
  //           descripcion: 'Iníciate en la programación con Python, un lenguaje fácil de aprender.',
  //           instructor: 'Juan Martínez',
  //           duracionHoras: 30,
  //           fechaInicio: new Date('2023-02-10'),
  //           fechaFin: new Date('2023-03-20'),
  //           cupoMaximo: 40,
  //           costo: 99.99,
  //           nivel: 'Principiante',
  //           categoria: 'Programación',
  //           requisitos: ['Ninguno.']
  //         },
  //         {
  //           id: 7,
  //           nombre: 'Cocina Gourmet',
  //           descripcion: 'Aprende a preparar platos gourmet con recetas exclusivas.',
  //           instructor: 'Ana Ramírez',
  //           duracionHoras: 55,
  //           fechaInicio: new Date('2023-04-01'),
  //           fechaFin: new Date('2023-05-31'),
  //           cupoMaximo: 15,
  //           costo: 249.99,
  //           nivel: 'Avanzado',
  //           categoria: 'Cocina',
  //           requisitos: ['Conocimientos básicos de cocina.']
  //         },
  //         {
  //           id: 8,
  //           nombre: 'Yoga y Meditación',
  //           descripcion: 'Mejora tu bienestar físico y mental con sesiones de yoga y meditación.',
  //           instructor: 'Sofía Fernández',
  //           duracionHoras: 20,
  //           fechaInicio: new Date('2023-03-15'),
  //           fechaFin: new Date('2023-04-30'),
  //           cupoMaximo: 25,
  //           costo: 79.99,
  //           nivel: 'Principiante',
  //           categoria: 'Salud y Bienestar',
  //           requisitos: ['Ninguno.']
  //         },
  //         {
  //           id: 9,
  //           nombre: 'Diseño Gráfico Avanzado con Adobe Illustrator',
  //           descripcion: 'Domina las herramientas avanzadas de diseño gráfico con Illustrator.',
  //           instructor: 'Laura Sánchez',
  //           duracionHoras: 40,
  //           fechaInicio: new Date('2023-02-25'),
  //           fechaFin: new Date('2023-04-10'),
  //           cupoMaximo: 30,
  //           costo: 149.99,
  //           nivel: 'Avanzado',
  //           categoria: 'Diseño Gráfico',
  //           requisitos: ['Conocimientos previos de diseño gráfico básico.']
  //         },
  //         {
  //           id: 10,
  //           nombre: 'Historia del Arte y la Cultura',
  //           descripcion: 'Explora la historia del arte y la cultura a lo largo de los siglos.',
  //           instructor: 'Manuel Gómez',
  //           duracionHoras: 50,
  //           fechaInicio: new Date('2023-03-10'),
  //           fechaFin: new Date('2023-05-10'),
  //           cupoMaximo: 35,
  //           costo: 159.99,
  //           nivel: 'Intermedio',
  //           categoria: 'Ciencias Sociales',
  //           requisitos: ['Ninguno.']
  //         }
  //       ]
  //       )
  //     })
  // };


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
