import {
  UsersActions,
  LOAD_USERS,
  LOAD_USERS_FAIL,
  LOAD_USERS_SUCCESS
} from './../actions/users.actions';
import { User } from './../../models/users.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: HttpErrorResponse;
}

const initialState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(
  state = initialState,
  action: UsersActions
): UsersState {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOAD_USERS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    case LOAD_USERS_SUCCESS:
      return {
        users: [...action.users],
        loading: false,
        loaded: true,
        error: null
      };
    default:
      return state;
  }
}
