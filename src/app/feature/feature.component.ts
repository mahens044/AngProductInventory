import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

import { AuthServiceService } from '../auth-service.service';
import { Products } from '../productsModel';

export interface UserData {
  Name: string;
  Description: string;
}

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
  products: Products[] = [];

  url: string = 'http://localhost:3000/comments';
  tableHeaders: string[] = [
    'Name',
    'Description',
    'Manufacturer',
    'Price',
    'Quantity',
  ];
  clicked = false;
  userExist;
   displayResult:boolean = false;
  dataSource: MatTableDataSource<UserData>;
  ngOnInit(): void {
    this.spinner.show();
    this.userExist = this.authService.isLoggedIn;
    if (this.userExist) {
      this.displayCheckBox();
    }
    this.fetchProducts(); //.unsubscribe();
  }

  fetchProducts() {
    console.log('Private start');

    return this.authService
      .getProductSummaryService()


      .subscribe((Response) => {
        this.products = Response;
        this.dataSource = new MatTableDataSource(this.products);
        console.log('Res ', this.dataSource);
        if (this.products.length == 0) {
          this.spinner.hide();
           this.displayResult = true;
          this._snackBar.open('No data Found', ' Empty', {
            duration: 2000,
          });

          console.log('No data' + this.products);
        }
        else{
          console.log("Inside list ")
          this.spinner.hide();
        }
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  displayCheckBox() {
    this.colums = ['CheckBox', 'Name', 'Description', 'ButtonView'];
  }
  ViewFilter(FilterItem) {
    console.log(FilterItem);
  }
  viewClicked(shoes) {
    this.clicked = false;
    this.colums = ['CheckBox', ...shoes, 'ButtonEdit'];
    console.log(shoes._value);
  }
  isClicked() {
    this.clicked = true;
  }

  completed = false;
  ListTobeDeleted = [];
  checkedList(prod) {
    if (prod['completed'] == false) {
      prod['completed'] = true;
      this.ListTobeDeleted = [...this.ListTobeDeleted, prod['id']];
    } else {
      prod['completed'] = false;
      const index: number = this.ListTobeDeleted.indexOf(prod['id']);
      this.ListTobeDeleted.splice(index, 1);
    }
  }

  colums = [
    // 'CheckBox',
    'Name',
    'Description',
    // 'Manufacturer',
    // 'Price',
    // 'Quantity',
    'ButtonView',
  ];

  Url;
  buttonName = 'Edit';
  ViewData(productData) {
    console.log('Logged ', this.authService.isLoggedIn);
    if(this.authService.isLoggedIn)
      productData['views'] = +productData['views'] + 1;

    console.log(productData['views']);
    console.log('Updated view ', productData);
    this.Url = 'https://capstoneangular-default-rtdb.firebaseio.com/products/' + productData['id']+'.json';
    this.authService
      .UpdateViews(this.Url, productData)
      .subscribe((Response) => {
        console.log("Hey ",productData['id']);

        this.router.navigate(['app-view-product-details', productData['id']]);
      });
  }
  UpdateData(element) {
    element.isEdit = !element.isEdit;
    if (element.isEdit) this.buttonName = 'Done';
    else this.buttonName = 'Edit';
    this.Url = 'http://localhost:3000/comments/' + element['id'];
    console.log('Update data with ' + JSON.stringify(element));
    console.log('Update data with ' + element['CheckBox']);

    this.authService.updateProduct(this.Url, element);
  }
  OnLoad() {
    this.products = this.products;
    console.log('Products loaded');
  }
  async deleteMultipleRows() {
    let dataArray = this.ListTobeDeleted;
    for (let i = 0; i < dataArray.length; i++) {
      // this.Url = 'http://localhost:3000/comments/' + dataArray[i];
      this.Url = 'https://capstoneangular-default-rtdb.firebaseio.com/products/' + dataArray[i]+'.json';

      await this.authService.deleteProducts(this.Url).then((Response) => {
        console.log('Deleted ',dataArray);
        console.log('List to be Deleted ',this.ListTobeDeleted);
      });

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['app-feature']);
    }
  }

  ViewProductDetail() {}
  addProduct() {
    // this.authService.addProductSummaryService(this.url)
  }
}
