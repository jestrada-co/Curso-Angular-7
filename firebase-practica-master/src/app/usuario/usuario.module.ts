import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AppMaterialModule } from './../app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AppMaterialModule,
    FormsModule
  ],
  exports: [
    LoginComponent, SignupComponent
  ]
})
export class UsuarioModule { }
