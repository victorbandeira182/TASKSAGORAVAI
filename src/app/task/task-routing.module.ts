import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './containers/task/task.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'tasks'},
  {path: 'tasks', component: TaskComponent},
  {path: 'tasks', component: TaskComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule {
}
