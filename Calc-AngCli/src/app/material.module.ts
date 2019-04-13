import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule],
    exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule]
})
export class MaterialModule { }
