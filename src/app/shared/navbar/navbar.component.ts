import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {
  constructor(private router: Router) {}

  showUser(id: string) {
    return id ? this.router.navigate([`/users/${id}`]) : false;
  }
}
