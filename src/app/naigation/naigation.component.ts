import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-naigation',
  templateUrl: './naigation.component.html',
  styleUrls: ['./naigation.component.css'],
})
export class NaigationComponent implements OnInit {
  showLogin: boolean = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedInBS.subscribe((res) => {
      this.showLogin = res.isLoggedIn;
    });
  }

  myRoutes = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/product',
      name: 'Products',
    },
  ];

  logOut() {
    this.authService.logoutUser();
  }
}
