import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Products } from '../users';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
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
  private sub;
  id;
  products: Products[] = [];

   tempProd:any=[];

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    // this.authService
    //   .getProductSummaryService(this.url)
    //   .subscribe((Response) => {
    //     console.log(Response);
    //     this.products = Response;
    //   });
    this.authService.getProductById(this.url,this.id)
    .subscribe((Response) => {
          console.log("Result is ",Response);
          this.tempProd.push(Response);
          console.log(this.tempProd);
          this.products = this.tempProd;
        });

  }
  viewClicked(shoes) {
    this.clicked = false;

    this.colums = [ ...shoes, 'ButtonEdit'];
    console.log("Custom ",shoes._value);
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
    'Manufacturer',
    'Price',
    'Quantity',
    'ButtonEdit'
    // 'ButtonDelete'
  ];
  //
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
  deleteData(product){
    this.Url = 'http://localhost:3000/comments/' + product['id'];
    this.authService.deleteProducts(this.Url).then((Response)=> {
      console.log("Deleted")
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['app-feature']);

  }
  ViewProductDetail(){

  }
  addProduct() {
    // this.authService.addProductSummaryService(this.url)
  }
}
