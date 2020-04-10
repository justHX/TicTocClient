import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import {BattleComponent} from './battle/battle.component';
import { GroundComponent } from './ground/ground.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HomeComponent} from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'buttle', component: BattleComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent, BattleComponent, GroundComponent, LoginComponent, RegistrationComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
