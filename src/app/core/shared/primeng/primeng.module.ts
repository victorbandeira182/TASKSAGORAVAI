import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule

  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule
  ]
})
export class PrimengModule { }
