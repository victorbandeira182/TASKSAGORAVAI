import {Injectable} from '@angular/core';
// Service
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
// RxJS
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.user.pipe(
      take(1),
      map(user => !!user),
      tap(logged => {
        if (!logged) {
          console.log('Error, please try once again!');
          this.router.navigate(['/']);
        }
      })
    );
  }

}
