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
  constructor(private authService: AuthServiceService,private router:Router) {}
  url: string = 'http://localhost:3000/comments';
  tableHeaders: string[] = ['Name', 'Description', 'Manufacturer', 'Price', 'Quantity'];
  clicked=false;
  ngOnInit(): void {
    this.authService
      .getProductSummaryService(this.url)
      .subscribe((Response) => {
        console.log(Response);
        this.products = Response;
      });
  }
  viewClicked(shoes){
    this.clicked=false;
    this.colums = ['CheckBox',...shoes,'ButtonEdit'];
    console.log(shoes._value);
  }
  isClicked()
    {
      this.clicked=true;
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

  deleteData(data) {
    console.log("Id "+data);
    this.Url = 'http://localhost:3000/comments/' + data['id'];
      this.authService.deleteProducts(this.Url)
      .subscribe(() =>{
         this.products ;
         console.log(this.products)
        });
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['app-feature']);

  }
  addProduct() {
    // this.authService.addProductSummaryService(this.url)
  }
}

// import { Component, OnInit } from '@angular/core';
// import { AuthServiceService } from '../auth-service.service';
// import { Products } from '../users';
// import { Router } from '@angular/router';

// const USER_SCHEMA = {

//   "Name": "text",
//   "Description": "text",
//   "Manufacturer":"text",
//   "Price":"text",
//   "Quantity":"number"
// }
// @Component({
//   selector: 'app-feature',
//   templateUrl: './feature.component.html',
//   styleUrls: ['./feature.component.css']
// })
// export class FeatureComponent implements OnInit {

//   constructor(private authService:AuthServiceService,private router:Router) { }
//   url:string = "http://localhost:3000/comments";
//   ngOnInit(): void {
//     this.authService.getProductSummaryService(this.url)
//     .subscribe( (Response) => {
//       console.log(Response);
//       this.products = Response;

//     } );
//   }
//   data_schema = USER_SCHEMA;
//   colums = ["CheckBox","Name", "Description", "Manufacturer", "Price", "Quantity","$$edit"];
//   products: Products[] = [];
//   // colums = ['Name'];
//   getProductSummary(){
//       this.authService.getProductSummaryService(this.url)
//       .subscribe( (Response) => {
//         console.log(Response);
//         this.products = Response;

//       } );
//     }

//     addProduct(){
//       // this.authService.addProductSummaryService(this.url)

//     }
//     Url;
//     UpdateData(element){
//       element.isEdit = !element.isEdit;
//       // NewUrl = this.url+'/'+id
//       this.Url = 'http://localhost:3000/comments/'+element['id'];
//       console.log("Update data with "+JSON.stringify(element));

//       this.authService.updateProduct(this.Url,element);
//     }
//     deleteProduct(id:any)
//     {
//       this.authService.deleteProduct(id);
//       this.router.navigate(['app-feature']);
//     }
//     editProduct(id:any)
//     {
//       this.router.navigate(['app-add-product']);
//     }
// }
