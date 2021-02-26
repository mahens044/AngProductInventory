import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Products } from '../users';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  url: string = 'http://localhost:3000/comments';
  tableHeaders: string[] = [
    'Name',
    'Description',
    'Manufacturer',
    'Price',
    'Quantity',
  ];
  clicked = false;
  ngOnInit(): void {
    this.authService
      .getProductSummaryService(this.url)
      .subscribe((Response) => {
        console.log(Response);
        this.products = Response;
      });
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
    'CheckBox',
    'Name',
    'Description',
    'Manufacturer',
    'Price',
    'Quantity',
    'ButtonEdit',
  ];
  products: Products[] = [];
  getProductSummary() {
    this.authService
      .getProductSummaryService(this.url)
      .subscribe((Response) => {
        console.log(Response);
        this.products = Response;
      });
  }
  Url;
  buttonName = 'Edit';
  UpdateData(element) {
    element.isEdit = !element.isEdit;
    if (element.isEdit) this.buttonName = 'Done';
    else this.buttonName = 'Edit';
    this.Url = 'http://localhost:3000/comments/' + element['id'];
    console.log('Update data with ' + JSON.stringify(element));
    console.log('Update data with ' + element['CheckBox']);

    this.authService.updateProduct(this.Url, element);
  }
 OnLoad(){
    this.products = this.products;
    console.log("Products loaded")
  }
  async deleteMultipleRows() {
    let dataArray = this.ListTobeDeleted;
    for (let i = 0; i < dataArray.length; i++) {
      this.Url = 'http://localhost:3000/comments/' + dataArray[i];
      await this.authService.deleteProducts(this.Url).then((Response)=> {
        console.log("Deleted")
      });

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['app-feature']);
    }
  }

  ViewProductDetail(){

  }
  addProduct() {
    // this.authService.addProductSummaryService(this.url)
  }
}
