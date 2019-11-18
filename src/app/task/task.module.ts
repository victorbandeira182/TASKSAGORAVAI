import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextMaskModule} from 'angular2-text-mask';
import {TaskComponent} from './containers/task/task.component';
import {SharedModule} from '../core/shared/shared.module';
import {TaskRoutingModule} from './task-routing.module';
import {CoreModule} from '../core/core.module';
import { StoreModule } from '@ngrx/store';
import { TaskReducer } from './store/reducers/task.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './store/effects/task.effect';
import {MatAutocompleteModule} from "@angular/material";




@NgModule({
  declarations: [TaskComponent,],
	imports: [
		CommonModule,
		SharedModule,
		TaskRoutingModule,
		CoreModule,
		StoreModule.forFeature('Task', TaskReducer),
		EffectsModule.forFeature([TaskEffects]),
		MatAutocompleteModule,
		TextMaskModule,


	]
})
export class TaskModule { }
