import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
