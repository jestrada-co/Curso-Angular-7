import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule, CommonModule, MatIconModule, MatMenuModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule, CommonModule, MatIconModule, MatMenuModule]
})
export class MaterialDesignModule { }
