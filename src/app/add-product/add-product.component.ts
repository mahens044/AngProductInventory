import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';


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
      this.authService.saveAddProduct(formData.value)

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
  canExit(): boolean {
    if (!this.DataExists) {
      if (confirm('Are you sure you want to leave')) {
        return true;
      } else {
        return false;
      }
    } else return true;
  }
}
