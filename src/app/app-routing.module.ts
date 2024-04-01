import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PublicComponent} from "./pages/public/public.component";
import {PrivateComponent} from "./pages/private/private.component";
import {LoginComponent} from "./pages/login/login.component";
import {loginResolver} from "./resolvers/login-resolver";
import {authGuard} from "./guards/auth-guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      ready: loginResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
