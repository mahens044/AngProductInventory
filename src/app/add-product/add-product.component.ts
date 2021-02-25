import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(
    private route: ActivatedRoute,
    private authService: AuthServiceService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.prod = this.router.getCurrentNavigation().extras.state;
      this.Name = this.prod.productdetails.queryParams.Name;
      console.log('Prod details ' + this.prod.productdetails.queryParams.Name);
    });
  }

  ngOnInit(): void {}
  Add(formData: NgForm) {
    this.authService.saveAddProduct(formData.value).subscribe((Response) => {
      console.log('Form Data:', Response);
      this.router.navigate(['app-feature']);
    });
  }
}
