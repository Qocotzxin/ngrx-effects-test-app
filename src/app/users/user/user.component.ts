import { HttpErrorResponse } from '@angular/common/http';
import { ShowUser } from './../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { takeUntil, switchMap, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/users.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject<void>();

  user: User;

  error: HttpErrorResponse;

  spinner: boolean;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.params
      .pipe(
        switchMap(params => {
          this.store.dispatch(new ShowUser(params.id));
          return this.store.select('user').pipe(takeUntil(this.ngUnsubscribe$));
        })
      )
      .subscribe(userState => {
        this.user = userState.user;
        this.error = userState.error;
        this.spinner = userState.loading;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
