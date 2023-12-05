import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../../models';
import { Observable, map } from 'rxjs';
import { Usuario } from '../../../usuarios/models';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-cursos-tabla',
  templateUrl: './cursos-tabla.component.html',
  styleUrls: ['./cursos-tabla.component.css']
})
export class CursosTablaComponent {

  public authUser$: Observable<Usuario | null>;
  constructor(private authService: AuthService){
  this.authUser$ = this.authService.authUser$;
}

get rol$ () :Observable<string | undefined> {
  return this.authUser$.pipe(
    map((usuario) => usuario?.rol));
}
  @Input()
  dataSource : Curso[] = [];

  displayedColumns = ['id','nombre','descripcion','instructor','categoria','costo','fechaInicio','fechaFin','acciones'];

  @Output()
  eliminarCurso = new EventEmitter<number>();

  @Output()
  editarCurso = new EventEmitter<Curso>();

}
