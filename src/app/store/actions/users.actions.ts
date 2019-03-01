import { User } from './../../models/users.model';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_USERS = '[Users] Load users';
export const LOAD_USERS_FAIL = '[Users] Load users fail';
export const LOAD_USERS_SUCCESS = '[Users] Load users success';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public users: User[]) {}
}

export type UsersActions = LoadUsers | LoadUsersFail | LoadUsersSuccess;
