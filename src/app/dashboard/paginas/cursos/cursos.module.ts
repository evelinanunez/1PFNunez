import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';
import { CursosTablaComponent } from './components/cursos-tabla/cursos-tabla.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent,
    CursosTablaComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
