import {CanActivateFn, Router} from "@angular/router";
import {AuthStateService} from "../services/auth-state.service";
import {inject} from "@angular/core";
import {map} from 'rxjs/operators'

export const authGuard: CanActivateFn = () => {
  const authState = inject(AuthStateService);
  const router = inject(Router);
  return authState.user$.pipe(
    map(user => {
      if(!user) {
        router.navigateByUrl('/login')
        return false
      }
      return true
    })
  )
}
