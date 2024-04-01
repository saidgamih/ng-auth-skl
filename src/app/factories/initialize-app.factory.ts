import {IAuthInfo} from "../models/IAuthInfo";
import {AuthStateService} from "../services/auth-state.service";

export function initializeAppFactory(authState : AuthStateService) {
  return () => {
    const user : IAuthInfo = JSON.parse(localStorage.getItem('user') ?? 'null')
    if(user) {
      authState.setState(user)
    }
  }
}
