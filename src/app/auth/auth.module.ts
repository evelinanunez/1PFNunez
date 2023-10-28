import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './paginas/login/login.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
