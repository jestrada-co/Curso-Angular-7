import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isAuthenticated = false;
  user: string;
  password: string;
  message: string;

  constructor(private service: AuthService) {
  }

  authenticate() {
    this.service.authenticate(this.user, this.password)
    .then(user => {
      console.log(user);
      this.isAuthenticated = true;
      this.message = 'Bienvenid@';
    },
    err => {
      console.log(err);
      this.isAuthenticated = false;
      this.message = 'Verifique sus credenciales';
    });
  }

  signOut() {
    this.service.signOut();
    this.isAuthenticated = false;
  }
}
