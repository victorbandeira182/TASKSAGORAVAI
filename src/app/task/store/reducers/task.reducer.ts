import {initializeState, TaskState} from '../states/task.state';

import {
  CREATE_TASK,
  CREATE_TASK_FAIL,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_SUCCESS,
  GET_TASK,
  GET_TASK_FAIL,
  GET_TASK_SUCCESS,
  TaskActionsTypes,
} from '../actions/task.actions';

export const initialState = initializeState();

export function TaskReducer(state: TaskState = initialState,
                            action: TaskActionsTypes) {

  switch (action.type) {
    //   GET
    case GET_TASK:
      return {...state, Loaded: false, Loading: true};

    case GET_TASK_SUCCESS:
      return {...state, Loaded: true, Loading: false, TaskList: action.payload};

    case GET_TASK_FAIL:
      return {...state, Loaded: false, Loading: false};

    //  CREATE

    case CREATE_TASK:
      const list = state.TaskList;
      list.push(action.payload);
      return {...state, Loaded: true, Loading: false, TaskList: list };

    case CREATE_TASK_SUCCESS:
      return {...state, Loaded: true, Loading: true};

    case CREATE_TASK_FAIL:
      return {...state, Loaded: false, Loading: false};

    //  DELETE

    case DELETE_TASK_SUCCESS:
      return {...state, Loaded: true, Loading: false};

    case DELETE_TASK_FAIL:
      return {...state, Loaded: false, Loading: true};

    //  DEFAULT
    default:
      return state;
  }
}

