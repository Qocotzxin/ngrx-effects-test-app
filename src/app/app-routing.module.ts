import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'users/:id', component: UserComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
