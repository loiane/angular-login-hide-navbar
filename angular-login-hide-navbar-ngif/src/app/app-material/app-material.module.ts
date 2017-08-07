import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ]
})
export class AppMaterialModule {}
