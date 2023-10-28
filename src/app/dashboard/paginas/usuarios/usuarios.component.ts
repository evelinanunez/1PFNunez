import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UsuariosDialogComponent } from './components/usuarios-dialog/usuarios-dialog.component';
import { Usuario } from './models';
import { UsuariosService } from './usuarios.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent {

  usuarios : Usuario[] = [];
  formulario ='';

  constructor(
    private matDialog : MatDialog,
    private usuarioServicio : UsuariosService

  ){
    this.usuarioServicio.traerUsuarios().subscribe({
      next :(v)=>{
        this.usuarios= v;
      },
      error :()=>{},
      complete: ()=>{},
    });
  }


  openUsuariosDialog() : void{
    this.matDialog.open(UsuariosDialogComponent)
    .afterClosed()
    .subscribe({
      next:(valor) =>{
        if(!!valor){
          this.usuarios= [
            ...this.usuarios,
            {
              ...valor, id: this.usuarios.length+1,
            }
          ];
        }
      }
    });
  }

  OnEliminarUsuario ( idUsuario : number) : void{
    this.usuarios = this.usuarios.filter((a) => a.id !== idUsuario);
  }

  onEditarUsuario ( usuario : Usuario) : void{
    this.matDialog.open(UsuariosDialogComponent,{
      data :usuario,
    })
    .afterClosed()
    .subscribe({
      next : (v)=>{
        if(!!v){
          this.usuarios = this.usuarios.map((u)=>
          u.id === usuario.id ? {...u,...v}: u);
        }
      }
    });
  }
}
