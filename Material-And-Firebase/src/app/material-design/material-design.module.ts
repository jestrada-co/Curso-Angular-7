import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, FormsModule]
})
export class MaterialDesignModule { }
