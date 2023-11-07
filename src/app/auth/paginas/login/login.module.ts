import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";


@NgModule({
  declarations:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule{}
