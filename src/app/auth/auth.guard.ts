import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogUnauthorizedComponent } from 'src/app/dialog-unauthorized/dialog-unauthorized.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthServiceService,
              private dialog:MatDialog
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url: string = state.url;
      if(this.authService.isLoggedIn){
        console.log('AuthGuard  '+this.authService.isLoggedIn);
        // alert("AuthGuard success"+this.authService.isLoggedIn);
        return true;
      }
      else{
        // alert("AuthGuard Sorry"+this.authService.isLoggedIn);
        this.dialog.open(DialogUnauthorizedComponent);

        console.log('AuthGuard  afd'+this.authService.isLoggedIn);

        return false;
      }

  }
}
