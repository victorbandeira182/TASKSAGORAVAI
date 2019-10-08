import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule

  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimengModule { }
