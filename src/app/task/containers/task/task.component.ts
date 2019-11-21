import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
// -------
import Task from '../../taskmodel/task.model';
import { TaskState } from '../../store/states/task.state';
import { getAllTasks } from '../../store/selectors/task.selectors';
// -------
import {Store, select} from '@ngrx/store';
import {
  GetTaskAction,
  CreateTaskAction,
  DeleteTaskAction,
} from '../../store/actions/task.actions';
// -------
import {Observable} from 'rxjs';
// -------
import { AuthService } from '../../../authentication/service/auth.service';




@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TaskComponent implements OnInit {

	public phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/]

  constructor(public store: Store<TaskState>,
              public authenticationService: AuthService) {
  }

  public tasks = [];
  formTask = new FormGroup({
    task: new FormControl,
    importancia: new FormControl,

  });


  task$: Observable<Task[]>;
  importancia$: Observable<Task[]>;




  ngOnInit() {
    this.task$ = this.store.pipe(select(getAllTasks));
    this.importancia$ = this.store.pipe(select(getAllTasks));
    this.store.dispatch(new GetTaskAction());
  }

  addToTaskList() {
    const task = {
      tarefa: this.formTask.get('task').value,
      importancia: this.formTask.get('importancia').value,

    };
    this.store.dispatch(new CreateTaskAction(task));
  }


  removeFromTaskList(task: Task) {
    this.store.dispatch(new DeleteTaskAction(task));
  }

}
