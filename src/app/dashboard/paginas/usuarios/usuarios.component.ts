import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UsuariosDialogComponent } from './components/usuarios-dialog/usuarios-dialog.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  formulario ='';
  constructor(
    private matDialog : MatDialog,
  ){}

  openUsuariosDialog() : void{
    this.matDialog.open(UsuariosDialogComponent)
    .afterClosed()
    .subscribe({
      next:(valor) =>{
        console.log('Valor: ', valor);
        if(!!valor){
          this.formulario= valor;
        }
      }
    });
  }
}
