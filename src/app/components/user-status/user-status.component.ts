import {Component, OnInit} from '@angular/core';
import {AuthStateService} from "../../services/auth-state.service";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'
import {IUser} from "../../models/IUser";
import {IAuthInfo} from "../../models/IAuthInfo";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss'
})
export class UserStatusComponent implements OnInit{
  user$: Observable<IUser | null> = new Observable();
  constructor(private authState : AuthStateService) {}

  ngOnInit() {
    this.user$ = this.authState.user$.pipe(
      map(user => user ? user.payload : null)
    )
  }

  logout() {
    this.authState.removeState()
  }
}
