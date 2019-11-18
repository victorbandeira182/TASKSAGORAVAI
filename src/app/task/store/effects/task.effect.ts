import { Injectable } from '@angular/core';
import Task from '../../taskmodel/task.model';

import {AngularFirestore} from '@angular/fire/firestore';


import { of} from 'rxjs';
import {map, catchError, pluck, exhaustMap} from 'rxjs/operators';
import { from } from 'rxjs/internal/observable/from';

import {
  GetTaskSuccessAction,
  GetTaskFailAction,

  CreateTaskSuccessAction,
  CreateTaskFailAction,

  DeleteTaskSuccessAction,
  DeleteTaskFailAction,

  GET_TASK,
  CREATE_TASK,DELETE_TASK,
} from '../actions/task.actions';

import {Actions, Effect, ofType} from '@ngrx/effects';


@Injectable()
export class TaskEffects {

  constructor(
    private actions$: Actions,
    private db: AngularFirestore
  ) {
  };


  @Effect()
  createTask$ = this.actions$.pipe(
    ofType(CREATE_TASK),
    pluck('payload'),
    exhaustMap((task: Task) => {
      const id = this.db.createId();
      return from(this.db.doc(`task/${id}`).set({id, ...task})).pipe(
        map(() => new CreateTaskSuccessAction()),
        catchError((error) => of(new CreateTaskFailAction(error)))
      );
    })
  );


  @Effect()
  getTask$ = this.actions$.pipe(
    ofType(GET_TASK),
    exhaustMap(() => this.db.collection('/task',
      ref => ref.orderBy('tarefa', 'asc')).valueChanges().pipe(
      map((tasks: Task[]) => new GetTaskSuccessAction(tasks)),
      catchError((error) => of(new GetTaskFailAction(error)))
    ))
  );

  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType(DELETE_TASK),
    pluck('payload'),
    exhaustMap((payload: Task) => from(this.db.doc(`/task/${payload.id}`).delete()).pipe(
      map(() => new DeleteTaskSuccessAction()),
      catchError((error) => of(new DeleteTaskFailAction(error)))
    ))
  );
}


