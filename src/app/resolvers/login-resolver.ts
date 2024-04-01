import {ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'
import {AuthStateService} from "../services/auth-state.service";
import {inject} from "@angular/core";

export const loginResolver : ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot, authState: AuthStateService = inject(AuthStateService), router: Router = inject(Router)) : Observable<boolean> => {
  return authState.user$.pipe(
    map(user => {
      if(user) {
        router.navigateByUrl('/private')
      }
      return true
    })
  )
}
