import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './pages/public/public.component';
import { PrivateComponent } from './pages/private/private.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {UserStatusComponent} from "./components/user-status/user-status.component";
import {initializeAppFactory} from "./factories/initialize-app.factory";
import {AuthStateService} from "./services/auth-state.service";

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserStatusComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [AuthStateService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
