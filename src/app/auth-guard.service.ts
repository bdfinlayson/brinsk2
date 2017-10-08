import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: Angular2TokenService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.userSignedIn()) {
      return true;
    }
    else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
