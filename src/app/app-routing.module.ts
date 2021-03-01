import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AwayGuardGuard } from './away-guard.guard';
import { FeatureComponent } from './feature/feature.component';
import { LogOutComponent } from './log-out/log-out.component';
import { TopViewedProductComponent } from './top-viewed-product/top-viewed-product.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';

const routes: Routes = [

  // {
  //   path:'Auth/1',component:AuthComponent
  // },
  {
    path:'Auth/:id',component:AuthComponent
  },
  {
    path:'app-feature',component:FeatureComponent
  },
  {
    path:'about',component:AboutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'logOut',component:LogOutComponent

  },
  {
    path:'app-add-product',component:AddProductComponent,
    canActivate:[AuthGuard],
    canDeactivate:[AwayGuardGuard]

  },
  {
    path:'app-view-product-details',component:ViewProductDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'app-view-product-details/:id',component:ViewProductDetailsComponent,
    canActivate:[AuthGuard]  },
  {
    path:'app-top-viewed-product',component:TopViewedProductComponent
    // canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
