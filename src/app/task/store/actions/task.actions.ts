import { Action } from '@ngrx/store';
import Task from '../../taskmodel/task.model';

export const GET_TASK = '[TASK] Get TASK';
export const GET_TASK_SUCCESS = '[TASK] Get TASK Success';
export const GET_TASK_FAIL = '[TASK] Get TASK Fail';

export const CREATE_TASK = '[TASK] Create TASK';
export const CREATE_TASK_SUCCESS = '[TASK] Create TASK Success';
export const CREATE_TASK_FAIL = '[TASK] Create TASK Fail';

export const DELETE_TASK = '[TASK] Delete TASK';
export const DELETE_TASK_SUCCESS = '[TASK] Delete TASK Success';
export const DELETE_TASK_FAIL = '[TASK] Delete TASK Fail';


// TASK GET ACTION


export class GetTaskAction implements Action {
  readonly type = GET_TASK;

  constructor() {
  }
}

export class GetTaskSuccessAction implements Action {
  readonly type = GET_TASK_SUCCESS;

  constructor(public payload: Task[]) {
  }
}

export class GetTaskFailAction implements Action {
  readonly type = GET_TASK_FAIL;

  constructor(public payload: (error: any) => Task[]) {
  }
}

// TASK CREATE ACTION

export class CreateTaskAction implements Action {
  readonly type = CREATE_TASK;

  constructor(public payload: Task) {
  }
}

export class CreateTaskSuccessAction implements Action {
  readonly type = CREATE_TASK_SUCCESS;
}

export class CreateTaskFailAction implements Action {
  readonly type = CREATE_TASK_FAIL;

  constructor(public payload: (error: any) => Task[]) {
  }
}

//    TASK DELETE ACTION


export class DeleteTaskAction implements Action {
  readonly type = DELETE_TASK;

  constructor(public payload: Task) {
  }
}

export class DeleteTaskSuccessAction implements Action {
  readonly type = DELETE_TASK_SUCCESS;
}

export class DeleteTaskFailAction implements Action {
  readonly type = DELETE_TASK_FAIL;

  constructor(public payload: (error: any) => Task[]) {
  }
}

//    TASK ACTIONS TYPES

export type TaskActionsTypes =
  | GetTaskAction
  | GetTaskSuccessAction
  | GetTaskFailAction
  | CreateTaskAction
  | CreateTaskSuccessAction
  | CreateTaskFailAction
  | DeleteTaskAction
  | DeleteTaskSuccessAction
  | DeleteTaskFailAction

