import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Products } from '../users';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }
  url:string = "http://localhost:3000/comments";
  ngOnInit(): void {
    this.authService.getProductSummaryService(this.url)
    .subscribe( (Response) => {
      console.log(Response);
      this.products = Response;

    } );
  }

  colums = ['Name', "Description", "Manufacturer", "Price", "Quantity"];
  products: Products[] = [];
  // colums = ['Name'];
  getProductSummary(){
      this.authService.getProductSummaryService(this.url)
      .subscribe( (Response) => {
        console.log(Response);
        this.products = Response;

      } );
    }

    addProduct(){
      // this.authService.addProductSummaryService(this.url)

    }
}
