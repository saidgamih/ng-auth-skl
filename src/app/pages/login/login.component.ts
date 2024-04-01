import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {IAuthInfo} from "../../models/IAuthInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService : AuthService, private router: Router) {}

  login() {
    this.authService.login({email: 'user@example.com', password: 'password'}).subscribe(
      {
        next: (response: IAuthInfo) => {
          this.router.navigateByUrl('/private');
        }
      }
    )
  }
}
