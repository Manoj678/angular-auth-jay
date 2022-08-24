import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Log {
  isLoggedIn: boolean;
  username: string;
}

@Injectable()
export class AuthService {
  private isLoggedIn: boolean;
  isLoggedInBS = new BehaviorSubject<Log>({ isLoggedIn: false, username: '' });
  username: string;

  constructor(private router: Router) {
    this.isLoggedIn = false;
  }

  login(username: string, password: string) {
    this.isLoggedIn = true;
    this.username = username;
    this.isLoggedInBS.next({isLoggedIn:this.isLoggedIn,username:this.username});
    return this.isLoggedInBS.asObservable();
  }

  isUserLoggedIn(): Observable<Log> {
    return this.isLoggedInBS.asObservable();
  }

  isAdminUser(): boolean {
    if (this.username === 'admin') {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
    this.isLoggedInBS.next({isLoggedIn:this.isLoggedIn,username:this.username});
    this.router.navigate(['login']);
  }
}
