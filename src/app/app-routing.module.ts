import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';


const routes : Routes = [
  {
    path: 'dashboard',
    loadChildren : ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'**',
    redirectTo: 'auth'
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
