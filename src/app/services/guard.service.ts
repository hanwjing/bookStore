import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(public router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    if(sessionStorage.getItem('User')){
      return true;
    }
    sessionStorage.setItem('Redirect',state.url);
    this.router.navigate(['/login']);
    return false;
  }
}
