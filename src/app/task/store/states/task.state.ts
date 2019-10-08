import Task from '../../taskmodel/task.model';

export interface TaskState {
  Loading: boolean;
  Loaded: boolean;
  TaskList: Task[];
}

export const initializeState = (): TaskState => {
  return ({
    Loading: false,
    Loaded: true,
    TaskList: [],
  });
};
