import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
Router,
UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class GaurdCanactiveGuard implements CanActivate {
canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean|UrlTree|Observable<boolean|UrlTree>|Promise<boolean|UrlTree> {
return true;
}
  // constructor(private router: Router) {}
  // canActivate(): Observable<boolean> {
  //   console.log('AuthGuard Activated');

  //   const allowAccess: boolean = false;

  //   if (!allowAccess) {
  //       console.log('redirecting to login');
  //       this.router.navigate(['/adminloginpage']);
  //   }
  //   return of(allowAccess);
  // }
}
