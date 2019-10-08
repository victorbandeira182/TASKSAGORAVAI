import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {PrimengModule} from './primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    PrimengModule
  ], exports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class SharedModule {
}
