import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  retUrl: string = 'home';
  user: User = new User();

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.retUrl = params.get('retUrl');
      console.log('LoginComponent/ngOnInit ' + this.retUrl);
    });
  }

  onSubmit() {
    console.log(this.user);
    this.authService
      .login(this.user.username, this.user.password)
      .subscribe((res) => {
        console.log('return to ' + this.retUrl);
        if (this.retUrl != null) {
          this.router.navigate([this.retUrl]);
        } else {
          this.router.navigate(['home']);
        }
      });
  }
}
