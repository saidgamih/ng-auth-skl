import { Injectable } from '@angular/core';
import { IAuthInfo } from "../models/IAuthInfo";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private _user = new BehaviorSubject<IAuthInfo | null>(null);
  user$ : Observable<IAuthInfo | null> = this._user.asObservable()
  constructor(private router: Router) { }

  saveSession(user : IAuthInfo) {
    localStorage.setItem('user', JSON.stringify(user))
    this._user.next(user)
  }

  setState(user : IAuthInfo) {
    this._user.next(user);
  }

  removeState() {
    this._user.next(null)
    localStorage.removeItem('user')
    this.router.navigateByUrl('/login')
  }

}
