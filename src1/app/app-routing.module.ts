import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { FeatureComponent } from './feature/feature.component';
import { LogOutComponent } from './log-out/log-out.component';

const routes: Routes = [

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
    path:'app-add-product',component:AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
