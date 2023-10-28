import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
  ],
  exports:[
    CursosComponent,
    MatCardModule
  ]
})
export class CursosModule { }
