import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthinticationService } from './authintication.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthintcationGuard implements CanActivate {

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
     
   if (this._AuthinticationService.userData.getValue()!= null) {
    return true
   }else{
    this._Router.navigate(['/login'])
    return false
   }
  }
  constructor(private _AuthinticationService:AuthinticationService ,private _Router:Router) { 
  } 
}
