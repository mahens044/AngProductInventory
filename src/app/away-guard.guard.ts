import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { AddProductComponent } from './add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class AwayGuardGuard implements CanDeactivate<AddProductComponent> {
  canDeactivate(component:AddProductComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {

      // if(true){
      //   alert("Are you sure  ")
      //   return false;
      // }
    return component.canExit();

  }

}
