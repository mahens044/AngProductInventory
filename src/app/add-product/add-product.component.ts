import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  public firstname: string;
  public prod: any;
  Name;
  value1: boolean = false;
  DataExists: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthServiceService,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.route.queryParams.subscribe((params) => {
      this.prod = this.router.getCurrentNavigation().extras.state;
    });
  }

  ngOnInit(): void {}
  ngDoCheck() {
    console.log('In Add');
    // const val =
    // this.router.navigate(['about']);
  }
  Add(formData: NgForm) {
    if (formData.dirty) {
      this.DataExists = true;
    } else {
      console.log('Prompt not', formData.value);
    }
    if (
      formData.value['Name'] &&
      formData.value['Manufacturer'] &&
      formData.value['Description'] &&
      formData.value['Price'] &&
      formData.value['Quantity']
    ) {
      this.authService
        .saveAddProduct(formData.value)

        .subscribe((Response) => {
          console.log('Form Data:', Response);
          this.router.navigate(['app-feature']);
        });
    } else {
      this._snackBar.open('Please enter all fields', '', {
        duration: 2000,
      });
    }
  }
  navigate1() {
    this.router.navigate(['about']);
  }

  val: boolean = false;
  async canExit(): Promise<any> {
    if (!this.DataExists) {
      const dialogRef = this.dialog.open(MatConfirmDialogComponent, {
        width: '250px',
        height:'170',
        position: { top: "10px" },

        disableClose: true,
        data: { leave: 'Out' },
    });

      await dialogRef
        .afterClosed()
        .toPromise()
        .then((Response) => {
          if (Response.length == 0) {
            console.log(Response.length);
            console.log('The dialog was closed', Response);
            this.val = false;
          }
          else{
            this.val = true;
          }
        });
      if (this.val == true) {
        return true;
      } else {
        return false;
      }

    } else {
      console.log('Closed not');
      return false;
    }
  }
}
