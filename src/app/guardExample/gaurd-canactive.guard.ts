import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class GaurdCanactiveGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean> {
    console.log('AuthGuard Activated');

    const allowAccess: boolean = false;

    if (!allowAccess) {
        console.log('redirecting to login');
        this.router.navigate(['/adminloginpage']);
    }
    return of(allowAccess);
  }
}
