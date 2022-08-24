import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}
  isLoggedIn: boolean;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    this.authService.isUserLoggedIn().subscribe((res) => {
      this.isLoggedIn = res.isLoggedIn;
    });
    if (!this.isLoggedIn) {
      alert(
        'You are not allowed to view this page. You are redirected to login Page'
      );
      this.router.navigate(['login'], { queryParams: { retUrl: route.url } });
      return false;
    }
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!this.authService.isAdminUser()) {
      alert('You are not Admin');
      return false;
    }
    return true;
  }
}
