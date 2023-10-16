import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsuariosDialogComponent } from './components/usuarios-dialog/usuarios-dialog.component';
import { UsuariosTableComponent } from './components/usuarios-table/usuarios-table.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuariosDialogComponent,
    UsuariosTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    UsuariosComponent
  ]
})
export class UsuariosModule { }
