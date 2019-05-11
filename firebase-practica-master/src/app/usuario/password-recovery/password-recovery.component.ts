import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor( private dialog: MatDialog) { }

  correo: string;

  ngOnInit() {
  }

  recuperarClave() {
    this.dialog.closeAll();
  }

}
