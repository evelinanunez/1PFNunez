import { createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/dashboard/paginas/usuarios/models";
import { AuthActions } from "./auth.actions";


export const authFeatureKey = 'auth';

export interface State{
  authUsuario : Usuario | null;
}

const initialState : State = {
  authUsuario: null,
}

export const reducer = createReducer(initialState,
  on(AuthActions.actualizarUsuario, (state,{data})=>({...state,authUsuario:data})),

  on(AuthActions.restabecerAuthUsuarios, ()=> initialState)
  )
