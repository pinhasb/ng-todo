import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
const Modules = [MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule,
  MatDialogModule, FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
  MatNativeDateModule, ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports:Modules
})
export class MaterialModule { }
