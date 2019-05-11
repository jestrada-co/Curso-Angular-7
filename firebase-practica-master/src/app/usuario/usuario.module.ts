import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AppMaterialModule } from './../app-material/app-material.module';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordRecoveryComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    AppMaterialModule,
    FormsModule,
    RouterModule
  ],
  exports: [LoginComponent],
  entryComponents: [SignupComponent, PasswordRecoveryComponent ]
})
export class UsuarioModule { }
