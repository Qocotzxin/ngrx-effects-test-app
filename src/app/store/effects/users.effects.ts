import { UsersService } from 'src/app/services/users.service';
import {
  LOAD_USERS,
  LoadUsersSuccess,
  LoadUsersFail
} from './../actions/users.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(LOAD_USERS),
    switchMap(() =>
      this.usersService.getUsers().pipe(
        map(users => new LoadUsersSuccess(users)),
        catchError(error => of(new LoadUsersFail(error)))
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
