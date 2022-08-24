import { Component, OnInit } from '@angular/core';
import { AuthService, Log } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  log: Log;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedInBS.subscribe((res) => {
      this.log = res;
    });
  }
}
