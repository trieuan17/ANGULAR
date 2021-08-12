import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})

export class GoastGuard implements CanActivate {
  constructor(public router: Router , public toast: ToastrService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!localStorage.getItem('token')){
      this.toast.error("vui lòng đăng nhập")
      this.router.navigate(['']);
      return false
    }
    else{
      return true
    }
  }
  
}
