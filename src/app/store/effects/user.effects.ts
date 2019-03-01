import {
  SHOW_USER,
  ShowUserSuccess,
  ShowUserFail
} from './../actions/user.actions';
import { UsersService } from 'src/app/services/users.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(SHOW_USER),
    switchMap(action =>
      this.usersService.getUserById(action['id']).pipe(
        map(user => new ShowUserSuccess(user)),
        catchError(error => of(new ShowUserFail(error)))
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UsersService) {}
}
