import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbar } from '@angular/material/toolbar';

const materialComps=[
  CommonModule,MatInputModule,
  MatCardModule, MatIconModule, MatLineModule,MatRadioModule,MatProgressSpinnerModule,
  MatButtonModule,MatToolbar

]
@NgModule({
  declarations: [],
  imports: [materialComps],exports:[materialComps]
})
export class MaterialModule { }
