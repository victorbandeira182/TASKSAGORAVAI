import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TaskState } from '../states/task.state';
import Task from '../../taskmodel/task.model';

export const getTaskState = createFeatureSelector('Task');

export const getAllTasks = createSelector(getTaskState, (state: TaskState) => {
  return state.TaskList;
});
