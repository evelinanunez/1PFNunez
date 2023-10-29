import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    CursosComponent,
  ]
})
export class CursosModule { }
