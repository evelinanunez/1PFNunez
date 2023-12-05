import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../models';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable, map } from 'rxjs';
import { Usuario } from '../../../usuarios/models';

@Component({
  selector: 'app-alumnos-tabla',
  templateUrl: './alumnos-tabla.component.html'
})
export class AlumnosTablaComponent {

  public authUser$: Observable<Usuario | null>;
  constructor( private router : Router,
              private authService: AuthService){
                this.authUser$ = this.authService.authUser$;
  }

  get rol$ () :Observable<string | undefined> {
    return this.authUser$.pipe(
      map((usuario) => usuario?.rol));
  }


  @Input()
  dataSource: Alumno[]= [];

  displayedColumns = ['id','nombrecompleto', 'email','dni','telefono' /*,'fechaNacimiento'*/, 'acciones'];

  @Output()
  eliminarAlumno = new EventEmitter<number>();

  @Output()
  editarAlumno = new EventEmitter<Alumno>();

  verDetalle( usuarioId : number): void{
    this.router.navigate(['dashboard','alumnos','detalle', usuarioId]);
  }
}
