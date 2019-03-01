import { HttpErrorResponse } from '@angular/common/http';
import { User } from './../../models/users.model';
import { LoadUsers } from './../../store/actions/users.actions';
import { AppState } from './../../store/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  users: User[];

  spinner: boolean;

  error: HttpErrorResponse;

  constructor(public store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('users').subscribe(appState => {
      this.users = appState.users;
      this.spinner = appState.loading;
      this.error = appState.error;
    });
    this.store.dispatch(new LoadUsers());
  }
}
