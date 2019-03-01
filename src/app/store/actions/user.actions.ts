import { User } from '../../models/users.model';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const SHOW_USER = '[User] Show user';
export const SHOW_USER_FAIL = '[User] Show user fail';
export const SHOW_USER_SUCCESS = '[User] Show users success';

export class ShowUser implements Action {
  readonly type = SHOW_USER;

  constructor(public id: string) {}
}

export class ShowUserFail implements Action {
  readonly type = SHOW_USER_FAIL;

  constructor(public payload: HttpErrorResponse) {}
}

export class ShowUserSuccess implements Action {
  readonly type = SHOW_USER_SUCCESS;

  constructor(public user: User) {}
}

export type UserActions = ShowUser | ShowUserFail | ShowUserSuccess;
