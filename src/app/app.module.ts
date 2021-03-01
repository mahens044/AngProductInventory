import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from'@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';

import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FeatureComponent } from './feature/feature.component';
import { DialogComponent } from './Utilities/dialog/dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { LogOutComponent } from './log-out/log-out.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductDetailsComponent } from './view-product-details/view-product-details.component';
import { DialogUnauthorizedComponent } from './dialog-unauthorized/dialog-unauthorized.component';
import { TopViewedProductComponent } from './top-viewed-product/top-viewed-product.component';
import { DialogLeaveComponent } from './dialog-leave/dialog-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AboutComponent,
    FeatureComponent,
    DialogComponent,
    LogOutComponent,
    AddProductComponent,
    ViewProductDetailsComponent,
    DialogUnauthorizedComponent,
    TopViewedProductComponent,
    DialogLeaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatToolbarModule,
    FormsModule,
    ChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatMenuModule,
    MatListModule,
MatTableModule,
MatSelectModule,
MatDialogModule,
MatCheckboxModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
