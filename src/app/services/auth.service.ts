import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuthCredentials} from "../models/IAuthCredentials";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {IAuthInfo} from "../models/IAuthInfo";
import {AuthStateService} from "./auth-state.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginPath = "auth/login"
  constructor(private httpClient : HttpClient, private authState: AuthStateService) {
  }

  login(credentials : IAuthCredentials) : Observable<IAuthInfo> {
    return this.httpClient.post<IAuthInfo>(`${environment.apiUrl}/${this._loginPath}`, credentials).pipe(
      map((user: IAuthInfo) => {
        this.authState.saveSession(user)
        return user;
      })
    );
  }

}
