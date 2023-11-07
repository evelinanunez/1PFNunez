import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./paginas/home/home/home.component";
import { CursosComponent } from "./paginas/cursos/cursos.component";
import { AlumnosComponent } from "./paginas/alumnos/alumnos.component";
import { UsuariosComponent } from "./paginas/usuarios/usuarios.component";
import { AlumnosDetalleComponent } from "./paginas/alumnos/componentes/alumnos-detalle/alumnos-detalle.component";
import { UsuarioDetalleComponent } from "./paginas/usuarios/components/usuario-detalle/usuario-detalle.component";

const routes : Routes =[
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'alumnos',
        loadChildren: ()=> import('./paginas/alumnos/alumnos.module').then((m)=>m.AlumnosModule)
      },

      {
        path:'cursos',
        loadChildren: ()=> import('./paginas/cursos/cursos.module').then((m)=>m.CursosModule)
      },
      // {
      //   path: 'alumnos/detalle/:id',
      //   component: AlumnosDetalleComponent,
      // },
      {
        path: 'usuarios',
        loadChildren: ()=> import('./paginas/usuarios/usuarios.module').then((m)=>m.UsuariosModule)
      },
      // {
      //   path: 'usuarios/detalle/:id',
      //   component:UsuarioDetalleComponent
      // }
      {
        path: '**',
        redirectTo: 'home',
      }
    ],
  }
]
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule{}
