import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/paginas/home/home/home.component';
import { CursosComponent } from './dashboard/paginas/cursos/cursos.component';
import { AlumnosComponent } from './dashboard/paginas/alumnos/alumnos.component';
import { UsuariosComponent } from './dashboard/paginas/usuarios/usuarios.component';
import { UsuarioDetalleComponent } from './dashboard/paginas/usuarios/components/usuario-detalle/usuario-detalle.component';
import { AlumnosDetalleComponent } from './dashboard/paginas/alumnos/componentes/alumnos-detalle/alumnos-detalle.component';


const routes : Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },

      {
        path:'cursos',
        component: CursosComponent
      },

      {
        path: 'alumnos',
        component: AlumnosComponent
      },
      {
        path: 'alumnos/detalle/:id',
        component: AlumnosDetalleComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'usuarios/detalle/:id',
        component:UsuarioDetalleComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)
export class AppRoutingModule{

}
