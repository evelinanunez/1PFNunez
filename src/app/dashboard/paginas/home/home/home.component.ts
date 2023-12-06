import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from '../../usuarios/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public authUser$: Observable<Usuario | null>;

  constructor(private authService: AuthService){
    this.authUser$ = this.authService.authUser$;
}

get nombreCompleto$(): Observable<string> {
  return this.authUser$.pipe(
    map((usuario) => `${usuario?.nombre} ${usuario?.apellido}`)
  );
}
}
