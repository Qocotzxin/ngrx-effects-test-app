import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, UserComponent],
  exports: [ListComponent, UserComponent]
})
export class UsersModule {}
