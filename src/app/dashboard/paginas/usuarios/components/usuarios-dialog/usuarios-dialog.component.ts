import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios-dialog',
  templateUrl: './usuarios-dialog.component.html',
  styles: [
  ]
})
export class UsuariosDialogComponent {

  usuariosForm : FormGroup;

  constructor(
    private fb: FormBuilder
  ){
    this.usuariosForm = this.fb.group({
      nombre:[''],
      apellido:[''],
      email:['']
    });
  }
}
