import {
  UserActions,
  SHOW_USER,
  SHOW_USER_FAIL,
  SHOW_USER_SUCCESS
} from './../actions/user.actions';
import { User } from './../../models/users.model';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: HttpErrorResponse;
}

const initialState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function userReducer(
  state = initialState,
  action: UserActions
): UserState {
  switch (action.type) {
    case SHOW_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
    case SHOW_USER_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    case SHOW_USER_SUCCESS:
      return {
        user: { ...action.user },
        loading: false,
        loaded: true,
        error: null
      };
    default:
      return state;
  }
}
